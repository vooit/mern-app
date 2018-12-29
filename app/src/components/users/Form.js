import React from 'react';
import TextInput from './TextInput';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment/moment.js'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            focused: null
        }
    }

    handleDateChange(date) {

        this.setState({date: date.format("Do MMMM YYYY")});

        console.log(this.state.date);
        this.props.user.eventDate = this.state.date;

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

                    <SingleDatePicker
                        //showClearDate={true}
                        customInputIcon={
                            <img alt="poopoo" src="https://img.icons8.com/metro/26/000000/calendar.png"></img>
                        }
                        inputIconPosition="after"
                        small={true}
                        block={false}
                        numberOfMonths={1}
                        date={this.props.user.eventDate}
                        onDateChange={date => this.handleDateChange(date)}
                        focused={this.state.focused}
                        onFocusChange={({focused}) =>
                            this.setState({focused})
                        }
                    />
                    <br/>
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