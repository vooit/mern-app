import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import './App.css';
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import NavBar from './components/navbar'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {


    render() {
        return (
            <div className="App">
                <NavBar></NavBar>
                <Provider store={store}>
                    <div>
                        <Router history={history} routes={routes}/>
                    </div>
                </Provider>
            </div>
        );
    }
}
