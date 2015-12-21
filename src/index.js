/**
** index.js entry file **
 **
 *
 * react-redux-starter-kit
 *
 * Léo Le Bras  { leo.lebraf@gmail.com }
 *
 * Work with Babel
 * http://babel.com/
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

import styles from './assets/reset.css';
if(__PROD__) require('./index.html').default;

ReactDOM.render(<App />, document.querySelector('.WinoManager__9EAzG'));
