import React from 'react';
import Modal from 'react-modal';
import { ProjectDetailsStore } from '../store/ProjectDetails';

class Project {
    constructor(title, description, uploadedImageFilePath) {
        this.title = title;
        this.description = description;
        this.uploadedImageFilePath = uploadedImageFilePath
    }
}

const ProjectCreationFormModal = (props) => {
    let uploadedImageFilePath;

    const onImageUpload = e => {
        let img = document.getElementById('imgg');
        let file = null;
        const fileList = e.target.files;

        for (let i = 0; i < fileList.length; i++) {

            if (fileList[i].type.match(/^image\//)) {
                file = fileList[i];

                const reader = new FileReader();
                reader.onloadend = () => {
                    uploadedImageFilePath = reader.result.replace('data:', '').replace(/^.+,/, '');
                };
                reader.readAsDataURL(file);
                var uploadImageBlob = new Blob([file]);
                uploadedImageFilePath = uploadImageBlob;
                if (file !== null) {
                    img.src = URL.createObjectURL(uploadImageBlob);
                }
                break;
            }
        }
    }

    return (
        <Modal
            isOpen={props.showProjectCreationFormModal}
            onRequestClose={props.handleCloseOption}
            contentLabel="Project Creation Form"
        >
            <h2>Project Creation Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                ProjectDetailsStore.dispatch(
                    {
                        type: 'ADD_PROJECT_DETAIL',
                        value: new Project(
                            e.target.elements.title.value.trim(),
                            e.target.elements.description.value.trim(),
                            uploadedImageFilePath
                        )
                    })

                ProjectDetailsStore.dispatch(
                    {
                        type: 'CLOSE_APPLICATION_FORM_MODAL'
                    })
            }}>
                Title*: <input type='text' name='title' required />
                <br />
                Description*: <textarea type='text' name='description' rows="5" cols="100" minLength="1" required />
                <br />
                Image: <input type="file" name='image' id="img" onChange={onImageUpload} />
                <br />
                Preview:< img id="imgg" src="" alt="(not yet uploaded)" width="200" height="200" />
                <br />
                <button >Save </button>
            </form>

        </Modal>
    );
}

export default ProjectCreationFormModal;



