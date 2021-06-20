import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import {ProjectDetailsStore} from "./store/ProjectDetails";
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={ProjectDetailsStore}>
        <HomePage />
    </Provider>, 
    document.getElementById('app'));
