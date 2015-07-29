import React, {Component} from 'react';
import './style.scss';

export default class Sample extends Component{

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
            <div className="Sample">
                <div className="Sample_content">
                    It works ! :)
                </div>
            </div>
        );
    }

}
