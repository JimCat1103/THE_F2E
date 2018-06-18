import React from 'react';
import {pure} from "recompose";
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';
import {Style} from './style';

const CheckedCategories = pure(({value="", children="確定", onClick=()=>{}}) => {
    return <Style>
        <div>{children}</div>
        <div onClick={() => {onClick(value, false)}}><FontAwesomeIcon icon={faTimesCircle}/></div>
    </Style>
});

export default CheckedCategories;

CheckedCategories.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};