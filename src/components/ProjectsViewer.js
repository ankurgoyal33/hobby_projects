import React from 'react';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';

const ProjectsViewer = (props) => (
    <div>
        <h2>List of projects:</h2>
        
        {props.listOfProjects.length ===0 && <p>No Projects added</p>}
        <ol>
        {
            props.listOfProjects.map((project, index )=>(
                <li>
                    <ProjectCard
                        key={project.title}
                        detail={{...project}}
                        // index={index}
                    />
                </li>
            ))
        }
        </ol>
    </div>
);

const mapStateToProps = function (state) {
    return {
        listOfProjects: state.listOfProjects
    };
}

export default connect(mapStateToProps)(ProjectsViewer);
