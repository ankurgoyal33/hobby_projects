import React from 'react';
import Header from './Header';
import ActionButton from './ActionButton';
import ProjectsViewer from './ProjectsViewer';
import ProjectCreationFormModal from './ProjectCreationFormModal';

export default class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.handleShowOption = this.handleShowOption.bind(this);
        this.handleCloseOption = this.handleCloseOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            showProjectCreationFormModal: false,
            listOfProjects: []
        };
    } 

    handleShowOption(){
        this.setState(() => ({showProjectCreationFormModal: true}));
    }
    
    handleCloseOption(){
        this.setState(() => ({showProjectCreationFormModal: false}));
    }

    handleAddOption(titleText, descriptionText){
        if(!titleText){
            return 'Title is mandatory';
        } 
        
        if(!descriptionText){
            return 'Description is mandatory (min 150 char)';
        }

        const listOfProject = {
            title: titleText,
            desc: descriptionText
        };

        this.setState((prevState)=>({
            listOfProjects: prevState.listOfProjects.concat([listOfProject])
        }));
    }

    handleDeleteOption(titleToRemove){
        console.log('hdo', titleToRemove);
        this.setState((prevState) => ({
            listOfProjects: prevState.listOfProjects.filter((project)=> titleToRemove !== project.title)
        }));
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('listOfProjects');
            const listOfProjects = JSON.parse(json);
    
            if(listOfProjects){
                this.setState(() => ({ listOfProjects}));
            }
        } catch(e){

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.listOfProjects.length !== this.state.listOfProjects.length){
            const json = JSON.stringify(this.state.listOfProjects);
            localStorage.setItem('listOfProjects', json);
        }
    }

    render(){
        return (
            <div>
                <Header />

                <p>Add New Project: </p>

                <ActionButton 
                    text={"Add"}
                    handleShowOption={this.handleShowOption}
                />

                <ProjectsViewer 
                    listOfProjects={this.state.listOfProjects}
                    handleDeleteOption={this.handleDeleteOption}
                />
                
                <ProjectCreationFormModal 
                    showProjectCreationFormModal = {this.state.showProjectCreationFormModal}
                    handleCloseOption = {this.handleCloseOption}
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}
