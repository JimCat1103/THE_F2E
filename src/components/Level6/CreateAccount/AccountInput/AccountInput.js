import React from 'react';
import {pure} from "recompose";
import TextInput from "../../TextInput/TextInput";
import {EMAIL_FORMAT} from "../../msg_consts";
import PropTypes from "prop-types";

const AccountInput = pure(({value='', title = 'Account', placeholder='example@email.com', type='text', onChange=()=>{}, is_account=false}) => {
    return <TextInput
        type={type}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        errorText={!is_account? EMAIL_FORMAT : ''}
    />
});

export default AccountInput;

AccountInput.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    is_account: PropTypes.bool,
    onChange: PropTypes.func
};
