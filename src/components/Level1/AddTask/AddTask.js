import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from './style';
import AddTaskButton from "./AddTaskButton/AddTaskButton";
import EditTask from "../EditTask/EditTask";

const AddTask = pure(({is_add_new_task = false, level1={}, onDateChange=()=>{}, onTimeChange=()=>{}, onDrop=()=>{}})=>{
    return <Style>
        <AddTaskButton
            is_add_new_task={is_add_new_task}
        />
        <EditTask disable={true} onDateChange={onDateChange} onTimeChange={onTimeChange} onDrop={onDrop} level1={level1} />
    </Style>
});

export default AddTask;

AddTask.propTypes = {
    onClick: PropTypes.func
};
