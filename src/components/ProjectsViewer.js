import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsViewer = (props) => (
    <div>
        <h1>List of projects:</h1>

        {
            props.listOfProjects.map((project)=>(
                <ProjectCard
                    key={project.title}
                    detail={project}
                />
            ))
        }
    </div>
);

export default ProjectsViewer;
