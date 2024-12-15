import config from '../config.json';

import Markdown  from 'react-markdown';

import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { useEffect, useState } from 'react';

export default function About() {
    const [aboutMd, setAboutMd] = useState('Loading...');

    useEffect(() => {
        fetch(config.about)
            .then(response => response.text())
            .then(text => setAboutMd(text));
    }, []);

    return (
        <>
            <h1>
                <font size="50">A</font>
                bout
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
                >{aboutMd}</Markdown>
            </div>
        </>
    );
}
