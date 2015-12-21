import React, { Component } from 'react';
import styles from './Wrapper'

const Wrapper = (props) => (
    <div className={ styles.container }>
        { props.children }
    </div>
);

export default Wrapper;
