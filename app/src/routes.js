import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Users from './components/users/Users';
import User from './components/users/User';
import NewUser from './components/users/NewUser';
import InfoPage from "./components/infopage/InfoPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={InfoPage}/>
        <Route path="/users" component={Users}>
            <Route path="/users/new" component={NewUser}/>
            <Route path="/users/:id" component={User}/>

        </Route>
    </Route>
);


