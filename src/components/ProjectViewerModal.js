import React from 'react';
import Modal from 'react-modal';

export default class ProjectViewerModal extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <Modal
                isOpen ={this.props.showProjectViewerModal}
                onRequestClose={this.props.handleCloseProjectViewerModal}
                contentLabel="Project Viewer"
            >
                <h2>Details of Selected Project</h2>
                <p>TITLE:{this.props.detail.title}</p>
                <p>DESC: {this.props.detail.desc}</p>
                <p>IMAGES: </p>
               

            </Modal>
        );
    }
}

