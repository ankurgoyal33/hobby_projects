import React from 'react';
import Header from './Header';
import ActionButton from './ActionButton';
import ProjectsViewer from './ProjectsViewer';
import ProjectCreationFormModal from './ProjectCreationFormModal';
import {ProjectDetailsStore} from '../store/ProjectDetails';
import { connect } from 'react-redux';

const HomePage = (props) => {
    
    return (
        <div>

            <Header />

            <ActionButton
                text={"Add New Project"}
                onClick={() => {
                    ProjectDetailsStore.dispatch(
                        {
                            type: 'OPEN_APPLICATION_FORM_MODAL'
                        })
                }}
            />

            <ProjectCreationFormModal
                showProjectCreationFormModal={props.showProjectCreationFormModal}
                handleCloseOption={() => {// change nameing to onclose
                    ProjectDetailsStore.dispatch(
                        {
                            type: 'CLOSE_APPLICATION_FORM_MODAL'
                        })
                }}
            />

            <ProjectsViewer />

        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        showProjectCreationFormModal: state.showProjectCreationFormModal,
    };
}

export default connect(mapStateToProps)(HomePage);


// function connect( arg1 ) {

//     return function(arg2) {

//         props = arg1(store.getState()) ; 
//         return function( props ) {
//             return <arg2 ></arg2>
//         }
//     }
// }