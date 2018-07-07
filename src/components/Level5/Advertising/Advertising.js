import React from 'react';
import _ from 'lodash';
import PropTypes from "prop-types";
import {pure} from "recompose";
import {Style} from "./style";

const Advertising = pure(({image = ''}) => {
    if(!_.isEmpty(image)) {
        return <Style>
            <img src={image} alt=""/>
        </Style>
    } else {
        return null;
    }
});

export default Advertising;

Advertising.propTypes = {
    image: PropTypes.string
};
