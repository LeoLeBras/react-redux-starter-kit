import React from 'react';
import Router, { Route } from 'react-router';
import App from './scripts/containers/App';
import Foo from 'Foo/';
import Bar from 'Bar/';

export const routes = (
    <Route handler={ App }>
        <Route name="foo" path="/" handler={ Foo }/>
        <Route name="bar" path="/bar" handler={ Bar }/>
    </Route>
);
