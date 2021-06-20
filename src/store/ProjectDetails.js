import { createStore } from 'redux';

function ProjectDetailsReducer(state = { showProjectCreationFormModal: false }, action) {
  switch (action.type) {
    case 'Open_Modal':
      return {  showProjectCreationFormModal: true } ;
    default:
      return state
  }
}

export const ProjectDetailsStore = createStore(ProjectDetailsReducer);


// store.subscribe(() => console.log(store.getState()))

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })
// // {value: 1}