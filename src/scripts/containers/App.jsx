import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import routes from 'routes';
import createHistory from 'history/lib/createHashHistory';
import configureStore from 'configStore';

import DevTools from './DevTools';

const store = configureStore();
const history = createHistory();
syncReduxAndRouter(history, store)

export default class App extends Component{

    /**
     * Render <DevTools /> component
     *
     * @return {jsx}
     */
    _renderDevTools(){
        return ( <DevTools /> );
    }



    /**
     * Render
     *
     * @return {jsx}
     */
    render() {
        return (
            <Provider store={ store }>
                <div>
                    <Router history={ history }>
                        { routes }
                    </Router>
                    { this._renderDevTools() }
                </div>
            </Provider>
        );
    }

}
