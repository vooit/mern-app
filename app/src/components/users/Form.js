import React from 'react';
import TextInput from './TextInput';
import Datepicker from './Datepicker';
import 'react-dates/lib/css/_datepicker.css';
import PropTypes from 'prop-types';


class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        user: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        valid: PropTypes.bool.isRequired,
        emailValid: PropTypes.bool.isRequired,
        dateHandler: PropTypes.func.isRequired
    }



    render() {

        return (
            <div className="col-12">
                <form>

                    <TextInput
                        name="firstName"
                        label="First Name"
                        value={this.props.user.firstName}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="lastName"
                        label="Last Name"
                        value={this.props.user.lastName}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="email"
                        label="Email"
                        value={this.props.user.email}
                        onChange={this.props.onChange}/>
                    {this.props.emailValid ?
                        <span className="alert alert-danger">Email is required an must contain "@"</span> : null}
                    <br/>

                    <Datepicker
                        date={this.props.user.eventDate}
                        onChange={this.props.dateHandler}
                    />
                    <br/>

                    <input
                        type="submit"
                        className="btn btn-primary"
                        disabled={!this.props.valid}
                        value={this.props.saving ? 'Saving...' : 'Save'}
                        onClick={this.props.onSave}/>

                </form>
            </div>
        );
    }
}

export default Form;



