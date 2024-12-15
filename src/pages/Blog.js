import config from "../config";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import { useEffect, useState } from "react";

export default function Blog() {
    const [gits, setGits] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!config.git_user || fetched) 
            return; 

        fetch(`https://api.github.com/users/${config.git_user}/gists`)
            .then((response) => response.json())
            .then((data) => {
                const fetchedGits = []; 
                const fetchPromises = data.map((gist) =>
                    fetch(gist.url)
                        .then((response) => response.json())
                        .then((data) => fetchedGits.push(data))
                );

                Promise.all(fetchPromises).then(() => {
                    setGits(fetchedGits);
                    setFetched(true);
                });
            });
    }, [fetched, config.git_user]);

    return (
        <>
            <h1>
                <font size="50">B</font>
                log
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
                {gits.map((git) => (
                    <div key={git.id} style={{
                        padding: '1rem',
                        border: '1px solid black',
                        margin: '1rem',
                    }}>
                        <h2>
                            {git.description} - Created: {git.created_at} - Updated: {git.updated_at}
                        </h2>
                        <hr />
                        <Markdown
                            remarkPlugins={[remarkGfm, remarkRehype]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {git.files[Object.keys(git.files)[0]].content}
                        </Markdown>
                    </div>
                ))}
            </div>
        </>
    );
}
