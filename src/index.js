import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/form";
ReactDOM.render(<Form />, document.getElementById('root'));


serviceWorker.unregister();
