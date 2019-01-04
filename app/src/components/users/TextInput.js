import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, type="text"}) => {
    let wrapperClass = 'form-group';


    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="new-form__wrapper field">
                <input
                    type={type}
                    name={name}
                    className="new-form__input form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

export default TextInput;