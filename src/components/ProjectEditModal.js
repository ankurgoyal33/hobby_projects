import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const ProjectEditModal = () => {

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

const mapStateToProps = function (state) {
    return {
        showProjectViewerModal: state.showProjectViewerModal
    };
}

export default connect(mapStateToProps)(ProjectEditModal);
