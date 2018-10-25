import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// importing redux function to create state 
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// importing reducer we made (функция которая возвращает новый стейт)
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

// Passing that state to main APP component - 
// to make state available for all childs

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    ,document.getElementById('root'));
