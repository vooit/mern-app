import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {loadUsers} from "./actions/usersActions";

const store = configureStore();
store.dispatch(loadUsers());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>,
        document.getElementById('root')
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
