import React from 'react';
import ActionButton from './ActionButton';
import ProjectViewerModal from './ProjectViewerModal';

export default class ProjectCard extends React.Component {
   
    constructor(props){
        super(props);
        this.handleShowProjectViewerModal = this.handleShowProjectViewerModal.bind(this);
        this.handleCloseProjectViewerModal = this.handleCloseProjectViewerModal.bind(this);

        this.state = {
            showProjectViewerModal: false,
        };
    } 

    handleShowProjectViewerModal(){
        alert("inside show option");
        this.setState(() => ({showProjectViewerModal: true}));
    }
    
    handleCloseProjectViewerModal(){
        alert("inside close option");
        this.setState(() => ({showProjectViewerModal: false}));
    }

    render(){
        return(
            <div>
                <p>Project is titled :{this.props.detail.title}</p>
                <p>Project contains following details: {this.props.detail.desc}</p>
                <ActionButton 
                    text={"More Details"}
                    showProjectViewerModal = {this.handleShowProjectViewerModal}
                />
                <ProjectViewerModal 
                    showProjectViewerModal = {this.state.showProjectViewerModal}
                    handleCloseProjectViewerModal = {this.handleCloseProjectViewerModal}
                />

                <ActionButton 
                    text={"Edit"}
                />
                <ActionButton 
                    text={"Delete"}
                />
                
            </div>
        );
    }
}