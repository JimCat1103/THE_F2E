import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import Header from "./Header/Header";
import {Style} from "./style";
import Filter from "./Filter/Filter";
import FilterDataDisplay from "./FilterDataDisplay/FilterDataDisplay";

const Level2 = pure(({
    level2={},
    onFromDateChange=()=>{},
    onToDateChange=()=>{},
    categories=[],
    onCheckboxChange=()=>{},
    onDisableCheck=()=>{}
})=>{
    return <Style>
        <Header/>
        <div className='content'>
            <Filter
                onFromDateChange={onFromDateChange}
                onToDateChange={onToDateChange}
                level2={level2}
                categories={categories}
                onCheckboxChange={onCheckboxChange}
            />
            <FilterDataDisplay
                level2={level2}
                categories={categories}
                onDisableCheck={onDisableCheck}
            />
        </div>
    </Style>
});

export default Level2;

Level2.propTypes = {
    level2: PropTypes.object,
    onFromDateChange: PropTypes.func,
    onToDateChange: PropTypes.func,
    categories: PropTypes.array,
    onCheckboxChange: PropTypes.func,
    onDisableCheck: PropTypes.func
};
