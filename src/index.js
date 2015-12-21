import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

import styles from './assets/reset.css';
if(__PROD__) require('./index.html').default;

ReactDOM.render(<App />, document.querySelector('.WinoManager__9EAzG'));
