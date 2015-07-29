import React, { Component } from 'react';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from 'reducers/';
import SampleApp from 'SampleApp';

const store = createStore(combineReducers(reducers));

export default class App{

    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return(
            <Provider store={store}>
                {() =>
                    <SampleApp />
                }
            </Provider>
        )
    }
}
