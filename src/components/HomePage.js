import React from 'react';
import Header from './Header';
import ActionButton from './ActionButton';
import ProjectsViewer from './ProjectsViewer';
import ProjectCreationFormModal from './ProjectCreationFormModal';
import {ProjectDetailsStore} from '../store/ProjectDetails';
import { connect } from 'react-redux';

const HomePage = (props) => {

    const handleShowOption = () => {
        //this.setState(() => ({showProjectCreationFormModal: true}));
    }
    
    const handleCloseOption = () => {
        //this.setState(() => ({showProjectCreationFormModal: false}));
    }

    const handleAddOption = (titleText, descriptionText) => {
        // if(!titleText){
        //     return 'Title is mandatory';
        // } 

        // if(!descriptionText){
        //     return 'Description is mandatory (min 150 char)';
        // }

        // const listOfProject = {
        //     title: titleText,
        //     desc: descriptionText
        // };

        // this.setState((prevState)=>({
        //     listOfProjects: prevState.listOfProjects.concat([listOfProject])
        // }));
    }

    return (
        <div>
            <Header />

            <ActionButton
                text={"Add New Project"}
                onClick={() => {
                    ProjectDetailsStore.dispatch(
                        {
                            type: 'Open_Modal'
                        })
                }}
            />

            <ProjectCreationFormModal
                showProjectCreationFormModal={props.showProjectCreationFormModal}
                handleCloseOption={handleCloseOption}
                handleAddOption={handleAddOption}
            />

            {/* <ProjectsViewer 
            listOfProjects={this.state.listOfProjects}
            handleDeleteOption={this.handleDeleteOption}
        /> */}

        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        showProjectCreationFormModal: state.showProjectCreationFormModal
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