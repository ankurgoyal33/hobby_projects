import React from 'react';
import Modal from 'react-modal';
import {ProjectDetailsStore} from '../store/ProjectDetails';

const ProjectCreationFormModal = (props) => {

    return (
        <Modal
            isOpen ={props.showProjectCreationFormModal}
            onRequestClose={props.handleCloseOption}
            contentLabel="Project Creation Form"
        >
            <h2>Project Creation Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                ProjectDetailsStore.dispatch(
                    {
                        type: 'ADD_PROJECT_DETAIL',
                        value : {
                            title: e.target.elements.title.value.trim(),
                            description: e.target.elements.description.value.trim()
                        }
                    })

                ProjectDetailsStore.dispatch(
                    {
                        type: 'CLOSE_APPLICATION_FORM_MODAL'
                    })
            }}>
                Title*: <input type='text' name='title' required/>
                <br/>
                Description*: <textarea type='text' name='description' rows="5" cols="100" minLength="150" required/>
                <br/>
                <button >Save </button>
            </form>

        </Modal>
    );
}

export default ProjectCreationFormModal;



