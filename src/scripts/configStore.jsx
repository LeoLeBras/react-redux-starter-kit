import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';

let cs = createStore;
if(__DEBUG__){
    cs = compose(
        require('DevTools').instrument,
    )(createStore);
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);
const store = createStoreWithMiddleware(combineReducers({
    routing: routeReducer,
    ...reducers
}));

export default function configureStore() {
    if (__DEV__) {
        module.hot.accept('./reducers/index', () => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
