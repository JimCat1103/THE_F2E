import React from 'react';
import PropTypes from "prop-types";
import {pure} from "recompose";
import {Style} from "./style";
import Header from "./Header/Header";

const Level5 = pure(({level5={}}) => {
    return  <Style>
            <Header/>
    </Style>
});

export default Level5;

Level5.propTypes = {
    level5: PropTypes.object,
};
