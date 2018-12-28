import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component {
    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <p>first name: {this.props.user.firstName}</p>
                <p>last name: {this.props.user.lastName}</p>
                <p>email: {this.props.user.email}</p>
            </div>
        );
    }
};

function mapStateToProps(state, ownProps) {

    let user = {firstName: '', lastName: '', email: ''};
    const userId = ownProps.params.id;
    // if (userId && state.users.length > 0) {
        console.log(userId)
        // user = Object.assign({}, state.users.find(user => user.id == id)
    // }
    return {user: user};
}

export default connect(mapStateToProps)(User);