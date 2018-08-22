import React from 'react';
import {pure} from 'recompose';
import TaskList from '../TaskList/TaskList';

const CompletedTaskList = pure((props) => {
    const {completedTask = []} = props;
    return <TaskList
        taskList={completedTask}
        contentTest={'completedTask'}
    />
});

export default CompletedTaskList;

CompletedTaskList.propTypes = {};