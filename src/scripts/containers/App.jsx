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
        return (
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        );
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let devTools;
        if(__DEBUG__){
            devTools =  this.renderDevTools();
        }

        return (
            <div>
                <Provider store={store}>
                    {() =>
                        <Wrapper children={ this.props.children } />
                    }
                </Provider>
                { devTools }
            </div>
        );
    }
}
