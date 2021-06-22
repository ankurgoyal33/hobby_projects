import React from 'react';
import ActionButton from './ActionButton';
import ProjectViewerModal from './ProjectViewerModal';
import ProjectEditModal from './ProjectEditModal';
import {ProjectDetailsStore} from '../store/ProjectDetails';
import { connect } from 'react-redux';

const ProjectCard = (props) => {
   
    return(
        <div>
            <p>Project is titled :<strong>{props.detail.title}</strong></p>
            <ActionButton 
                text={"More Details"}
                onClick={() => {
                    ProjectDetailsStore.dispatch(
                        {
                            type: 'OPEN_MORE_DETAILS_MODAL',
                            // value: props.index
                            value: props.detail
                        })
                }}
            />
            <ProjectViewerModal />

            <ActionButton 
                text={"Edit"}
                onClick={() => {
                    ProjectDetailsStore.dispatch(
                        {
                            type: 'OPEN_EDIT_MODAL'
                        })
                }}
            />
            {/* <ProjectEditModal 
                showProjectViewerModal = {props.showProjectEditModal}
                handleCloseProjectViewerModal = {() => {
                    ProjectDetailsStore.dispatch(
                        {
                            type: 'CLOSE_EDIT_MODAL'
                        })
                }}
            /> */}
            <ActionButton 
                text={"Delete"}
                onClick={() => {
                    ProjectDetailsStore.dispatch(
                        {
                            type: 'DELETE_PROJECT_DETAIL',
                            titleToRemove: props.detail.title
                        })
                }}
            />
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        showProjectEditModal: state.showProjectEditModal
    };
}

export default connect(mapStateToProps)(ProjectCard);
