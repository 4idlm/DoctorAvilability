import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../src/weather/css/weather-icons.css'
 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
