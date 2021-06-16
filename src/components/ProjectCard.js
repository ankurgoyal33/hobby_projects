import React from 'react';
import ActionButton from './ActionButton';

const ProjectCard = (props) => (
    
    <div>
        <p>Project is titled :{props.detail.title}</p>
        <p>Project contains following details: {props.detail.desc}</p>
        <ActionButton 
            text={"More Details"}
        />
        <ActionButton 
            text={"Edit"}
        />
        <ActionButton 
            text={"Delete"}
        />
        
    </div>
);

export default ProjectCard;