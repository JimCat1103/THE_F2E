import React from 'react';
import {pure} from 'recompose';
import PropTypes from 'prop-types';
import {Style} from "./style";

const Header = pure(({title="漫畫名稱", is_bright=true}) => {
    return <Style is_bright={is_bright}>
        <div>{title}</div>
    </Style>
});

export default Header;

Header.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string
};