import React from 'react';
import Modal from 'react-modal';

export default class ProjectCreationFormModal extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();

        const titleText = e.target.elements.title.value;
        const descriptionText = e.target.elements.description.value;
        
        const error = this.props.handleAddOption(titleText,descriptionText);

        this.setState(()=> ({error}));

        if(!error){
            e.target.elements.title.value='';
            e.target.elements.description.value='';
        }
    }

    render(){
        return (
            <Modal
                isOpen ={this.props.showProjectCreationFormModal}
                onRequestClose={this.props.handleCloseOption}
                contentLabel="Project Creation Form"
            >
                <h3>Project Creation Form</h3>
                {this.state.error && <p>{this.state.error}</p>}
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

