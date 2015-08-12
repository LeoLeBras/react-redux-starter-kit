import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';
import SampleApp from 'SampleApp';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

let cs = createStore;
if(__DEBUG__){
    cs = compose(require('redux-devtools').devTools(), createStore);
}
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);
const store = createStoreWithMiddleware(combineReducers(reducers));

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
                        <SampleApp />
                    }
                </Provider>
                { devTools }
            </div>
        );
    }
}
