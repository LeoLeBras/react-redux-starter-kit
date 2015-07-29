import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from "actions/SampleActions";
import Sample from 'Sample/';

@connect(state => ({ samples: state.samples }))
export default class SampleApp extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { }
    static propTypes = { }



    /**
     * Render
     *
     * @return JSX
     */
    render() {
        return (
            <Sample />
        );
    }

}
