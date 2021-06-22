import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const ProjectViewerModal = (props) => {
    return (
        <Modal
            isOpen ={!!props.showProjectViewerModal}
            onRequestClose={props.handleCloseProjectViewerModal}
            contentLabel="Project Viewer"
        >
            <h2>Details of Selected Project</h2>
            <p>TITLE:{props.showProjectViewerModal.title }</p>
            <p>DESC: {props.showProjectViewerModal.description}</p>
            <p>IMAGES: </p>
            <button onClick={props.handleCloseProjectViewerModal}>Ok</button>
        </Modal>
    );
}

const mapStateToProps = function (state) {
    return {
        showProjectViewerModal: state.showProjectViewerModal
    };
}

export default connect(mapStateToProps)(ProjectViewerModal);