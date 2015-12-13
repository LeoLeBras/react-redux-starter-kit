import React from 'react';
import { Route } from 'react-router';

export const routes = (
    <Route path='' component={ require('Wrapper/') }>
        <Route path='*' component={ require('Welcome/') } />
    </Route>
);
