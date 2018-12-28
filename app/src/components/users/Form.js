import React from 'react';
import TextInput from './TextInput';

class Form extends React.Component {

    render() {

        return (
            <div className="col-12">
                <form>
                    <TextInput
                        name="firstName"
                        label="First Name"
                        /*value={this.props.user.firstName}
                        onChange={this.props.onChange}*/ />

                    <TextInput
                        name="lastName"
                        label="Last Name"
                        /*value={this.props.user.lastName}
                        onChange={this.props.onChange}*/ />

                    <TextInput
                        name="email"
                        label="Email"
                        /*value={this.props.user.email}
                        onChange={this.props.onChange}*/ />
                    <input
                        type="submit"
                        className="btn btn-primary"
                        disabled={this.props.saving}
                        value={this.props.saving ? 'Saving...' : 'Save'}
                        onClick={this.props.onSave}/>
                </form>
            </div>
        );
    }
}

export default Form;