import React from 'react';
import Router from 'react-router';
import { routes } from './routes';
import App from './scripts/containers/App';
import 'stylesheets/main';

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
