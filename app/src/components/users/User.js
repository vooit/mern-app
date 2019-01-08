import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/usersActions'
import PropTypes from 'prop-types';


class User extends React.Component {

    static propTypes = {
        user: PropTypes.object.isRequired
        // actions: PropTypes.object.isRequired
    }

    onDeleteUser = () => {
        this.props.deleteUser(this.props.user);
    };

    render() {
        return (
            <div className="user__info-data col-md-8 col-md-offset-2">
                <h1>User Data</h1>
                <p className="user__info-element">first name: {this.props.user.firstName}</p>
                <p className="user__info-element">last name: {this.props.user.lastName}</p>
                <p className="user__info-element">email: {this.props.user.email}</p>
                <p className="user__info-element">event date: {this.props.user.eventDate}</p>
                <br/>
                <button
                    onClick={this.onDeleteUser}
                    className="btn btn-primary">
                    delete
                </button>
            </div>
        );
    }
};




function mapStateToProps(state, ownProps) {

    let user = {firstName: '', lastName: '', email: '', eventDate: ''};
    const userId = ownProps.params.id;
    if (userId && state.users.length > 0) {
        user = state.users.find(user => user._id === userId);
    }
    return {user};
}

function mapDispatchToProps(dispatch) {
    return ({
        deleteUser: (user) => {
            dispatch(actions.deleteUser(user))
        }
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(User);