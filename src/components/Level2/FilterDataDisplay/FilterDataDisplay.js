import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from "./style";
import CheckedCategories from "./CheckedCategories/CheckedCategories";
import CityData from "./CityData/CityData";

const FilterDataDisplay = pure(({level2={}, categories=[], onDisableCheck=()=>{}})=>{
    return <Style>
        <div className='title'><h2>Showing 15 results by…</h2></div>
        <div className='checked-categories'>
            {
                categories.map((data, index) => {
                    const {name, value} = data;
                    return (
                        level2[value] &&
                        <CheckedCategories key={`categories_show_${index}`} onClick={onDisableCheck} value={value}>{name}</CheckedCategories>
                    )
                })
            }
        </div>

        <CityData />
    </Style>
});

export default FilterDataDisplay;

FilterDataDisplay.propTypes = {

};
