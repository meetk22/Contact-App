import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import contactReducer from './Redux/Reducer/contactReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(contactReducer, composeWithDevTools())

ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}> <Router><App></App></Router></Provider> 
        </React.StrictMode>
     
    , document.getElementById('root'));
