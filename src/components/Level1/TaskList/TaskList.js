import React from 'react';
import {pure} from 'recompose';
import {Style} from './style';

const TaskList = pure(({taskList = [], contentTest= ''})=>{
    console.log(taskList);
    return <Style>
        <h1>{contentTest}</h1>
    </Style>
});

export default TaskList;

TaskList.propTypes = {

};
