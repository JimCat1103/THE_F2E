import React from 'react';
import _ from 'lodash';
import {pure} from "recompose";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import {Style} from "./style";
import PropTypes from "prop-types";

const TextInput = pure(({value='', title = '', placeholder='', type='text', onChange=()=>{}, errorText=''}) => {
    return <Style>
        <div className='text-title'>{title}</div>
        <div className='input-wrap'>
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => {onChange(e.target.value)}}/>
            {!_.isEmpty(errorText) && <FontAwesomeIcon icon={faExclamationTriangle} />}
        </div>
        {!_.isEmpty(errorText) && <div className='error-wrap'>
            <div>{errorText}</div>
        </div>}
    </Style>
});

export default TextInput;

TextInput.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    errorText: PropTypes.string,
    onChange: PropTypes.func
};
