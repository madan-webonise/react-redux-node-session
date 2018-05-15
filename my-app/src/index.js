import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import studentReducer from './reducers/studentReducer'

const store = createStore(studentReducer);
console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
