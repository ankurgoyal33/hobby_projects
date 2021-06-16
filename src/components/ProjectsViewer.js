import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsViewer = (props) => (
    <div>
        <h2>List of projects:</h2>
        
        {props.listOfProjects.length ===0 && <p>No Projects added</p>}
        <ol>
        {
            props.listOfProjects.map((project)=>(
                <li>
                    <ProjectCard
                        key={project.title}
                        detail={project}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                </li>
            ))
        }
        </ol>
    </div>
);

export default ProjectsViewer;
