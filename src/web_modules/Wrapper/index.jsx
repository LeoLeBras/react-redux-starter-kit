import React, { Component } from 'react';
import styles from './Wrapper';

export default class Wrapper extends Component {
    render() {
        return(
            <div>
                { this.props.children }
            </div>
        );
    }
}
