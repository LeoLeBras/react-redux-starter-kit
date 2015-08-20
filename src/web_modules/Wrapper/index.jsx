import React, { Component} from 'react';
import { RouteHandler } from 'react-router';
import './style.scss';

export default class Wrapper extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { }
    static propTypes = { }



    /**
     * Render
     *
     */
    render(){
        return (
            <div className="Wrapper">
                <div className="Wrapper_content">
                    { this.props.children }
                </div>
            </div>
        );
    }

}
