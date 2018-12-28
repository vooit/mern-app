import React from 'react';
import {connect} from 'react-redux';
import Form from './Form';

class NewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {firstName: '', lastName: '', email: ''},
            saving: false
        };
        this.saveUser = this.saveUser.bind(this);
        // this.updateUsersState = this.updateUsersState.bind(this);
    }

    updateUserState(event) {
        // const field = event.target.name;
        // const user = this.state.user;
        // user[field] = event.target.value;
        // return this.setState({user: user});
    }

    saveUser(event) {
        event.preventDefault();
        // this.props.actions.createUser(this.state.user)
    }

    render() {
        return (
            <div>
                <h1>new user</h1>
                <Form
                    user={this.state.user}

                />
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
}


export default connect(mapStateToProps)(NewUser);