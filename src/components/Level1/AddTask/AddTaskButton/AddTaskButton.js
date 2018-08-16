import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from './style';

const AddTaskButton = pure(({is_add_new_task=false, onClick=()=>{console.log("in")}})=>{
    return <Style>
        <div onClick={onClick}><span>＋ Add Task</span></div>
    </Style>
});

export default AddTaskButton;

AddTaskButton.propTypes = {
    onClick: PropTypes.func
};
