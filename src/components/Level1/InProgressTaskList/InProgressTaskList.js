import React from 'react';
import {pure} from 'recompose';
import TaskList from '../TaskList/TaskList';

const InProgressTaskList = pure((props) => {
    const {inProgressTask = []} = props;
    return <TaskList
        taskList={inProgressTask}
        contentTest={'inProgressTask'}
    />
});

export default InProgressTaskList;

InProgressTaskList.propTypes = {};