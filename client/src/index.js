import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
axios.defaults.baseURL = process.env.NODE_ENV ==='production'
 ? 'https://morning-caverns-73590.herokuapp.com/'
 : "http://localhost:3000" ;

ReactDOM.render(
  <React.StrictMode>
  <I18nextProvider i18n={ i18n }>

    <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
