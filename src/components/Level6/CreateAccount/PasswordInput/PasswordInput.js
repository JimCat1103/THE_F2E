import React from 'react';
import {pure} from "recompose";
import TextInput from "../../TextInput/TextInput";
import PropTypes from "prop-types";

const PasswordInput = pure(({value='', title = 'Password', placeholder='6-8 number or letter ', type='password', onChange=()=>{}, errorText=''}) => {
    return <TextInput
        type={type}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        errorText={errorText}
    />
});

export default PasswordInput;

PasswordInput.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    errorText: PropTypes.string
};
