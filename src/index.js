import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import AppState from './context/appState.jsx';



ReactDOM.render(
    <BrowserRouter>
    <AppState>
    < App / >
    </AppState>
    </BrowserRouter> , document.getElementById('root'));
registerServiceWorker();