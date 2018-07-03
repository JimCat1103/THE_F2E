import React from 'react';
import {pure} from 'recompose';
import PropTypes from 'prop-types';
import {Style} from "./style";

const Header = pure(({title="漫畫名稱", status="bright"}) => {
    return <Style status={status}>
        <div>{title}</div>
    </Style>
});

export default Header;

Header.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string
};