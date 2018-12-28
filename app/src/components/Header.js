import React from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    return (

        <AppBar position="static">
            <Toolbar>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                <Link to="/users" activeClassName="active">Users</Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;