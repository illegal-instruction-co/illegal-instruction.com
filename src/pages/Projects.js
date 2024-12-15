import config from "../config";

import { useEffect, useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${config.git_user}/repos`)
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <>
            <h1>
                <font size="50">P</font>
                rojects
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
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <a href={project.html_url} target="_blank" rel="noreferrer">
                                {project.name}
                            </a> - {project.description}
                        </li>
                    ))}
                </ul>
            </div>
            
        </>
    );
}
