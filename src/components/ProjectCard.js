import React from 'react';
import ActionButton from './ActionButton';
import ProjectViewerModal from './ProjectViewerModal';
import ProjectEditModal from './ProjectEditModal';

export default class ProjectCard extends React.Component {
   
    constructor(props){
        super(props);
        this.handleShowProjectViewerModal = this.handleShowProjectViewerModal.bind(this);
        this.handleCloseProjectViewerModal = this.handleCloseProjectViewerModal.bind(this);
        this.handleShowProjectEditModal = this.handleShowProjectEditModal.bind(this);
        this.handleCloseProjectEditModal = this.handleCloseProjectEditModal.bind(this);

        this.state = {
            showProjectViewerModal: false,
            showProjectEditModal: false,
        };
    } 

    handleShowProjectViewerModal(){
        this.setState(() => ({showProjectViewerModal: true}));
    }
    
    handleCloseProjectViewerModal(){
        this.setState(() => ({showProjectViewerModal: false}));
    }

    handleShowProjectEditModal(){
        this.setState(() => ({showProjectEditModal: true}));
    }
    
    handleCloseProjectEditModal(){
        this.setState(() => ({showProjectEditModal: false}));
    }

    render(){
        return(
            <div>
                <p>Project is titled :<strong>{this.props.detail.title}</strong></p>
                <p>Project contains following details: {this.props.detail.desc}</p>
                <ActionButton 
                    text={"More Details"}
                    handleShowOption = {this.handleShowProjectViewerModal}
                />
                <ProjectViewerModal 
                    showProjectViewerModal = {this.state.showProjectViewerModal}
                    handleCloseProjectViewerModal = {this.handleCloseProjectViewerModal}
                    detail = {this.props.detail}
                />

                <ActionButton 
                    text={"Edit"}
                    handleShowOption = {this.handleShowProjectEditModal}
                />
                <ProjectEditModal 
                    showProjectViewerModal = {this.state.showProjectEditModal}
                    handleCloseProjectViewerModal = {this.handleCloseProjectEditModal}
                    detail = {this.props.detail}
                />
                <ActionButton 
                    text={"Delete"}
                />
                
            </div>
        );
    }
}