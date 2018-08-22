import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from './style';
import AddTask from "./AddTask/AddTask";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import MyTaskList from "./MyTaskList/MyTaskList";
import InProgressTaskList from "./InProgressTaskList/InProgressTaskList";
import CompletedTaskList from "./CompletedTaskList/CompletedTaskList";

const tabs_data = [
    {
        label: 'tab 1',
        name: 'My Tasks',
        component: (props) => <MyTaskList {...props}/>
    }, {
        label: 'tab 2',
        name: 'In progress',
        component: (props) => <InProgressTaskList {...props}/>
    },{
        label: 'tab 3',
        name: 'Completed',
        component: (props) => <CompletedTaskList {...props}/>
    },
];

const title = tabs_data.map((t, index) => {
    return <Tab key={`tab-title-${index}`}>{t.name}</Tab>
});

function renderTabContent({level1, inProgressTask, completedTask, is_add_new_task, onDateChange, onTimeChange, onDrop}) {
    const {allTask=[]}=level1;
    return tabs_data.map((t, index) => {
        return <TabPanel key={`tab-title-${index}`}>
            <AddTask
                level1={level1}
                is_add_new_task={is_add_new_task}
                onDateChange={onDateChange}
                onTimeChange={onTimeChange}
                onDrop={onDrop}
            />
            <div className='task-list-container'>
                <t.component level1={level1} allTask={allTask} inProgressTask={inProgressTask} completedTask={completedTask}/>
            </div>
        </TabPanel>
    });
}

const Level1 = pure(({is_add_new_task=false, level1={}, inProgressTask=[], completedTask=[], onDateChange=()=>{}, onTimeChange=()=>{}, onDrop=()=>{}})=>{
    return <Style>
        <Tabs>
            <div className='tabs-title-wrap'>
                <TabList className='tabs-title'>
                    {title}
                </TabList>
            </div>
            <div className='tabs-content-wrap'>
                {renderTabContent({level1, inProgressTask, completedTask, is_add_new_task, onDateChange, onTimeChange, onDrop})}
            </div>
        </Tabs>
    </Style>
});

export default Level1;

Level1.propTypes = {
    onDateChange: PropTypes.func,
    onTimeChange: PropTypes.func,
    onDrop: PropTypes.func
};
