import React from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, type="text"}) => {
    let wrapperClass = 'form-group';


    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
              <div className="alert alert-danger">{error}</div>
            </div>
        </div>
    );
};

export default TextInput;