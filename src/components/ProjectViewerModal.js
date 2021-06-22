import React from 'react';
import Modal from 'react-modal';
import {ProjectDetailsStore} from '../store/ProjectDetails';
import { connect } from 'react-redux';

const ProjectViewerModal = (props) => {

    const handleCloseProjectViewerModal = () => {
        ProjectDetailsStore.dispatch(
            {
                type: 'CLOSE_MORE_DETAILS_MODAL'
            })
    }

    return (
        <Modal
            isOpen ={!!props.showProjectViewerModal}
            onRequestClose={handleCloseProjectViewerModal}
            contentLabel="Project Viewer"
        >
            {
                props.showProjectViewerModal &&
                
                <div>
                    <h2>Details of Selected Project</h2>
                    <p>TITLE:{props.showProjectViewerModal.title }</p>
                    <p>DESC: {props.showProjectViewerModal.description}</p>
                    {/* <img src={"../../../../BingWallpaper.jpg"} /> */}
                    <button onClick={handleCloseProjectViewerModal}>Ok</button>
                </div>
            }
        </Modal>
    );
}

const mapStateToProps = function (state) {
    return {
        showProjectViewerModal: state.showProjectViewerModal
    };
}

export default connect(mapStateToProps)(ProjectViewerModal);