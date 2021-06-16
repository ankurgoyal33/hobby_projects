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

        this.state = {
            showProjectCreationFormModal: false,
            listOfProjects: [
                {
                    title:"p1",
                    desc: "This is project 1."
                },
                {
                    title:"p2",
                    desc: "This is project 2."
                }
            ]
        };
    } 

    handleShowOption(){
        alert("inside show option");
        this.setState(() => ({showProjectCreationFormModal: true}));
    }
    
    handleCloseOption(){
        alert("inside close option");
        this.setState(() => ({showProjectCreationFormModal: false}));
    }

    handleAddOption(listOfProject){
        alert('inside add option');
        // this.setState((prevState)=>({
        //     listOfProjects: prevState.listOfProjects.concat([listOfProject])
        // }));

        // this.state.listOfProjects = {...this.state.listOfProjects, ...listOfProject}

        const lOP = Object.assign(this.state.listOfProjects, listOfProject);
        this.setState(()=>({listOfProjects:lOP}));
    }

    render(){
        return (
            <div>
                <Header />
                <p>Add New Project: </p>
                <ActionButton 
                    text={"Add"}
                    handleShowOption={this.handleShowOption}
                    // handleShowOption={() => {
                    //     this.setState({showProjectCreationFormModal: true});
                    // }}
                />
                <ProjectsViewer listOfProjects={this.state.listOfProjects}/>
                
                <ProjectCreationFormModal 
                    showProjectCreationFormModal = {this.state.showProjectCreationFormModal}
                    handleCloseOption = {this.handleCloseOption}
                    handleAddOption = {this.handleAddOption}
                />

            </div>
        );
    }
}
