import { createStore } from 'redux';

let lOP = localStorage.getItem('listOfProjects') ? 
            JSON.parse(localStorage.getItem('listOfProjects')):[]; 

let Initial_State= {
  showProjectCreationFormModal: false,
  showProjectViewerModal: false,
  showProjectEditModal: false,
  listOfProjects:lOP
};

function ProjectDetailsReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'OPEN_APPLICATION_FORM_MODAL':
      return {  
        ...state, 
        showProjectCreationFormModal: true 
      } ;
    case 'CLOSE_APPLICATION_FORM_MODAL':
      return {  
        ...state, 
        showProjectCreationFormModal: false 
      } ;
    case 'OPEN_MORE_DETAILS_MODAL':
      return {  
        ...state, 
        showProjectViewerModal: action.value
        // showProjectViewerModal: state.listOfProjects[action.value]
      } ;
    case 'CLOSE_MORE_DETAILS_MODAL':
      return {  
        ...state, 
        showProjectViewerModal: undefined 
      } ;
    case 'OPEN_EDIT_MODAL':
      return {  
        ...state, 
        showProjectEditModal: true 
      } ;
    case 'CLOSE_EDIT_MODAL':
      return {  
        ...state, 
        showProjectEditModal: false 
      } ;

    case 'ADD_PROJECT_DETAIL':
      let listt =  [ ...state.listOfProjects , { ...action.value}] ;
      localStorage.setItem('listOfProjects', JSON.stringify(listt));
      return{
        ...state,
        listOfProjects: listt
        // listOfProjects: [ ...state.listOfProjects , { ...action.value, showDetails : false}]
      };

    case 'DELETE_PROJECT_DETAIL':
      let lis =  state.listOfProjects.filter((project)=> action.titleToRemove !== project.title);
      localStorage.setItem('listOfProjects', JSON.stringify(lis));

      return{
        ...state,
        listOfProjects: lis
      };

    default:
      return state;
  }
}

export const ProjectDetailsStore = createStore(ProjectDetailsReducer);


// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })
// // {value: 1}