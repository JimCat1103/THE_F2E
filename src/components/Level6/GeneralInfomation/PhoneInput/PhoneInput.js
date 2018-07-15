import React from 'react';
import {pure} from "recompose";
import TextInput from "../../TextInput/TextInput";
import {CELLPHONE_FORMAT} from "../../msg_consts";
import PropTypes from "prop-types";

export function handleChange(value, onChange) {

}

const PhoneInput = pure(({value='', title = 'Phone', placeholder='0987-654-321', type='text', onChange=()=>{}, is_cellphone=false}) => {

    return <TextInput
        type={type}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        errorText={!is_cellphone? CELLPHONE_FORMAT : ''}
    />
});

export default PhoneInput;

PhoneInput.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    is_cellphone: PropTypes.bool
};
