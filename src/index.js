import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers'


ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <App />
    </Provider >,

    document.getElementById('root'));