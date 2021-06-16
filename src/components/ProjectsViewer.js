import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsViewer = (props) => (
    <div>
        <h1>List of projects:</h1>
        {props.listOfProjects.length ===0 && <p>No Projects added</p>}
        {
            
            props.listOfProjects.map((project)=>(
                <ProjectCard
                    key={project.title}
                    detail={project}
                    handleDeleteOption = {props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default ProjectsViewer;
