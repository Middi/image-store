import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById('root'));
    
registerServiceWorker();
