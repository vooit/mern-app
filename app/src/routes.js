import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Main from './components/main/Main';
import Users from './components/users/Users';
import User from './components/users/User';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="/users" component={Users} />
    </Route>
);