import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Foo extends Component{

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
            <Link to="bar">It works ! :)</Link>
        );
    }

}
