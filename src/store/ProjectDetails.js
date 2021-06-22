import { createStore } from 'redux';


let Initial_State= {
  showProjectCreationFormModal: false,
  showProjectViewerModal: false,
  showProjectEditModal: false,
  listOfProjects: []
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
        showProjectViewerModal: false 
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
      return{
        ...state,
        listOfProjects: [ ...state.listOfProjects , { ...action.value, showDetails : false}]
      };

    case 'DELETE_PROJECT_DETAIL':
      return{
        ...state,
        listOfProjects: state.listOfProjects.filter((project)=> action.titleToRemove !== project.title)
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