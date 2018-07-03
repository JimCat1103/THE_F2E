import React from 'react';
import PropTypes from "prop-types";
import {pure} from "recompose";
import {Style} from "./style";

const Level5 = pure(({level5={}}) => {
    return  <Style>
            Level5
    </Style>
});

export default Level5;

Level5.propTypes = {
    level5: PropTypes.object,
};
