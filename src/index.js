import React from 'react';
import 'stylesheets/main';
import Router, { Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { routes } from 'routes';
import { reduxRouteComponent } from 'redux-react-router';
import { store } from 'configStore';
const RouteComponent = reduxRouteComponent(store);

let configRoutes = (
    <Router history={ history }>
        <Route component={ RouteComponent } childRoutes={routes} />
    </Router>
);

React.render(configRoutes, document.body);
