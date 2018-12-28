import React from 'react';
import UsersList from './UsersList';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';




class Users extends React.Component {

    render() {
        return (
            <div>
                <h1>Users</h1>
                <div>
                    <UsersList users={this.props.users}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({users: state.users});

export default connect(mapStateToProps)(Users);