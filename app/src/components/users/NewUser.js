import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from './Form';
import * as actions from '../../actions/userActions';

class NewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                eventDate: null
            },
            saving: false
        };
        this.redirect = this.redirect.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.updateUserState = this.updateUserState.bind(this);
    }

    redirect() {
        console.log('redirect');
    }

    saveUser(event) {
        event.preventDefault();
        console.log('save user action')
        // this.props.actions.createUser(this.state.user)
        this.redirect()
    }

    updateUserState(event) {
        const field = event.target.name;
        console.log(field)
        let user = this.state.user;
        user[field] = event.target.value;
        this.setState({user: user});
    }

    render() {
        return (
            <div>
                <h1>new user</h1>
                <Form
                    user={this.state.user}
                    onSave={this.saveUser}
                    saving={this.state.saving}
                    onChange={this.updateUserState}
                />
                {this.state.user.firstName}
                <br/>
                {this.state.user.lastName}
                <br/>
                {this.state.user.email}
                <br/>
                {this.state.user.eventDate}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewUser);