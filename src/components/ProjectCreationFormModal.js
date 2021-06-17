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

        const titleText = e.target.elements.title.value.trim();
        const descriptionText = e.target.elements.description.value.trim();
        
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
                <h2>Project Creation Form</h2>
                {/* {this.state.error && <p>{this.state.error}</p>} */}
                <form onSubmit={this.handleAddOption} autoComplete="on">
                        Title*: <input type='text' name='title' autoComplete="title" required/>
                        <br/>
                        Description*: <textarea type='text' name='description' autoComplete="description" rows="5" cols="100" minLength="150" required/>
                        <br/>
                    <button>Save</button>
                </form>
                <button onClick={this.props.handleCloseOption}> Exit</button>

            </Modal>
        );
    }
}

