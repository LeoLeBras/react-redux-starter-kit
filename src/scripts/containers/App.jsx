import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Wrapper from 'Wrapper/';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { store } from 'configStore';

export default class App extends Component{

    /**
     * Render
     *
     * @return JSX
     */
    renderDevTools(){
        if(__DEBUG__){
            const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

            return (
                <DebugPanel top right bottom>
                    <DevTools store={ store } monitor={LogMonitor} />
                </DebugPanel>
            );
        }
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return (
            <div>
                <Provider store={store}>
                    {() =>
                        <Wrapper children={ this.props.children } />
                    }
                </Provider>
                { this.renderDevTools() }
            </div>
        );
    }
}
