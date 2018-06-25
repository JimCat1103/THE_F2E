import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from "./style";

const Level4 = pure(()=>{
    return <Style>
        <div className='product-list-title'>
            <div>CCCLOTHES</div>
            <div>MEN’S TOPS</div>
        </div>

    </Style>
});

export default Level4;

Level4.propTypes = {

};
