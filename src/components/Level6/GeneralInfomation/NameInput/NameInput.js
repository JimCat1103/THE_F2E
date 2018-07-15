import React from 'react';
import {pure} from "recompose";
import TextInput from "../../TextInput/TextInput";
import {USERNAME_NOT_EMPTY} from "../../msg_consts";
import PropTypes from "prop-types";

const NameInput = pure(({value='', title = 'Name (optional)', placeholder='Example Name', type='text', onChange=()=>{}, is_username_empty=false}) => {
    return <TextInput
        type={type}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        errorText={!is_username_empty? USERNAME_NOT_EMPTY : ''}
    />
});

export default NameInput;

NameInput.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    is_username_empty: PropTypes.bool
};
