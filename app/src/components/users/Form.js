import React from 'react';
// import TextInput from '../common/TextInput';
// import CheckBox from '../common/CheckBox';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div>
                <form>
                    <input
                        type="submit"
                        className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default Form;