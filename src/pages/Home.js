import config from '../config.json';

import Markdown  from 'react-markdown';

import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { useEffect, useState } from 'react';

export default function Home() {
    const [homeMd, setHomeMd] = useState('Loading...');

    useEffect(() => {
        fetch(config.home)
            .then(response => response.text())
            .then(text => setHomeMd(text));
    }, []);

    return (
        <>
            <h1>
                <font size="50">H</font>
                ome
            </h1>
            <div style={{
                padding: '1rem',
                width: '80vw',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                wordBreak: 'break-all',
                whiteSpace: 'pre-wrap',
                margin: 'auto',
            }}>
                <Markdown 
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[remarkRehype]}
                >{homeMd}</Markdown>
            </div>
        </>
    );
}
