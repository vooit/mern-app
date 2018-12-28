import React from 'react';
import UsersList from './UsersList';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';

// import * as usersActions from '../../actions/usersActions';
import NewUser from './NewUser';
import * as actions from '../../actions/usersActions';

class Users extends React.Component {

    // componentWillMount() {
    //     if (this.props.users[0].id == '') {
    //         this.props.actions.loadUsers();
    //     }
    // }
    render() {
        const users = this.props.users;

        return (
            <div className="col-md-12">
                <h1>Users <Link to={'/users/new'} className="btn btn-primary">+ cat</Link></h1>
                <div className="col-md-4">
                    <UsersList users={users}/>
                </div>
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

//
// const mapStateToProps = (state, ownProps) => ({users: state.users});
//
// export default connect(mapStateToProps)(Users);


function mapStateToProps(state, ownProps) {
    // if (state.users.length > 0) {
        return {
            users: state.users
        };
    // } else {
    //     return {
    //         users: [{id: '', firstName: '', lastName: '', email: ''}]
    //     }
    // }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
