import React from 'react';
import Modal from 'react-modal';

export default class ProjectEditModal extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <Modal
                isOpen ={this.props.showProjectViewerModal}
                onRequestClose={this.props.handleCloseProjectViewerModal}
                contentLabel="Project Edit"
            >
                <h2>Edit page</h2>

            </Modal>
        );
    }
}

