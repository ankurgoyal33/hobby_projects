import React from 'react';
import Modal from 'react-modal';

export default class ProjectCreationFormModal extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    // handleAddOption(e){
    //     e.preventDefault();
    //     alert("inside ADD");
    //     // const title = e.target.elements.title.value;
    //     // alert(title);
    //     const description = e.target.elements.description.value;
    //     alert(description);
    //     // const listOfProject = {
    //     //     title: {title},
    //     //     description: {description}
    //     // };
    //     this.props.handleAddOption(title);
    // }

    handleAddOption(e){
        e.preventDefault();

        const titleText = e.target.elements.title.value;
        const descriptionText = e.target.elements.description.value;

        const listOfProject = {
            title: titleText,
            desc: descriptionText
        };
        this.props.handleAddOption(listOfProject);
    }

    render(){
        return (
            <Modal
                isOpen ={this.props.showProjectCreationFormModal}
                onRequestClose={this.props.handleCloseOption}
                contentLabel="Project Creation Form"
            >
                <h3>Project Creation Form</h3>
                <form onSubmit={this.handleAddOption}>
                    Title: <input type='text' name='title' />
                    Description: <textarea type='text' name='description' />
                    <button>Save</button>
                </form>
                
                <button onClick={this.props.handleCloseOption}> Exit</button>

            </Modal>
        );
    }
}

