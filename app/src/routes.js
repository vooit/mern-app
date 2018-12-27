import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Users from './components/users/Users';
import User from './components/users/User';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/users" component={Users} >
            <Route path="/users/:id" component={User} />
        </Route>
    </Route>
);