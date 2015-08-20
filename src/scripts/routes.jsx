import React from 'react';
import App from 'App';
import Foo from 'Foo/';
import Bar from 'Bar/';

export const routes = {
    component: App,
    childRoutes: [
        { path: '/', component: Foo },
        { path: '/bar', component: Bar },
    ]
};
