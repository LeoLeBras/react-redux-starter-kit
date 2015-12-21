import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';

export default function configureStore() {
    let cs = createStore
    if(__DEBUG__)
        cs = require('DevTools').default.instrument()(createStore);

    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);
    const store = createStoreWithMiddleware(combineReducers({
        routing: routeReducer,
        ...reducers
    }));

    if (__DEV__) {
        module.hot.accept('./reducers/index', () => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
