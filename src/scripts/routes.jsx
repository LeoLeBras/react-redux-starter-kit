import React from 'react';
import { Route } from 'react-router';

export default (
    <Route path='' component={ require('Wrapper').default }>
        <Route path='*' component={ require('Welcome').default } />
    </Route>
);
