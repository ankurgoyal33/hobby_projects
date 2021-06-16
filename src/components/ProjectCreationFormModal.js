import React from 'react';
import Modal from 'react-modal';

export default class ProjectCreationFormModal extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    
        this.state = {
            title:"aaa",
            description:"bbb"
        };
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
        alert("inside ADD");
        const listOfProject = {
            title: this.state.title,
            description: this.state.description
        };
        alert(listOfProject);
        this.props.handleAddOption(listOfProject);
    }

    handleTitle(e){
        e.preventDefault();
        alert("inside TITLE");
        const titleText = e.target.elements.title.value;
        this.setState(()=>({title: titleText}));
        
    }

    handleDescription(e){
        e.preventDefault();
        alert("inside DESC");
        const descriptionText = e.target.elements.description.value;
        this.setState(()=>({description: descriptionText}));
    }

    render(){
        return (
            <Modal
                isOpen ={this.props.showProjectCreationFormModal}
                onRequestClose={this.props.handleCloseOption}
                contentLabel="Project Creation Form"
            >
                <h3>Project Creation Form</h3>
                <form onSubmit={this.handleTitle}>
                    Title: <input type='text' name='title' />
                    <button>Add Title</button>
                </form>
                <form onSubmit={this.handleDescription}>
                    Description: <textarea type='text' name='description' />
                    <button>Add Desc</button>
                </form>
                
                <button onClick={this.handleAddOption}> Save</button>
                <button onClick={this.props.handleCloseOption}> Exit</button>

            </Modal>
        );
    }
}

