import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// importing redux function to create state 
import { createStore } from 'redux';
// importing reducer we made (функция которая возвращает новый стейт)
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

ReactDOM.render(<App />, document.getElementById('root'));
