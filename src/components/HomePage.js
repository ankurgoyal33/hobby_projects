import React from 'react';
import Header from './Header';
import AddButton from './AddButton';
import ProjectsViewer from './ProjectsViewer';


export default class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            listOfProjects: []
        };
    }

    render(){
        const subtitle = 'Subtitle: Projects from all over the world';

        return (
            <div>
                <Header subtitle={subtitle} />
                <AddButton />
                <ProjectsViewer listOfProjects={this.state.listOfProjects}/>
            </div>
        );
    }
}
