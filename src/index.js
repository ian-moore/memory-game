import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { updateApp } from './reducer';
import './index.css';
import App from './App';



const store = createStore(updateApp, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'),
);