import React, { Component } from 'react';
import styles from './Wrapper'

const Wrapper = ({ children }) => (
    <div className={ styles.container }>
        { children }
    </div>
);

export default Wrapper;
