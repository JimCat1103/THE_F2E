import React from 'react';
import {pure} from 'recompose';
import TaskList from '../TaskList/TaskList';

const MyTaskList = pure((props) => {
    const {allTask = []} = props;
    return <TaskList
        taskList={allTask}
        contentTest={'allTask'}
    />
});

export default MyTaskList;

MyTaskList.propTypes = {};