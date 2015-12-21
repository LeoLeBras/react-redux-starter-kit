import React from 'react';
import { Route } from 'react-router';

import Welcome from 'Welcome/'
import Wrapper from 'Wrapper/'

export default (
    <Route path='' component={ Wrapper }>
        <Route path='*' component={ Welcome } />
        <Route path='hello' component={ Welcome } />
    </Route>
);
