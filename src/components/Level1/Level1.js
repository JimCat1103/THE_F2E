import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from './style';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import AddTask from "./AddTask/AddTask";

const Level1 = pure(({is_add_new_task=false, level1={}, onDateChange=()=>{}, onTimeChange=()=>{}, onDrop=()=>{}})=>{
    return <Style>
        <Tabs className='tab-wrap'>
            <TabList className='tab-top'>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                <Tab>Title 3</Tab>
            </TabList>

            <TabPanel>
                <AddTask
                    level1={level1}
                    is_add_new_task={is_add_new_task}
                    onDateChange={onDateChange}
                    onTimeChange={onTimeChange}
                    onDrop={onDrop}
                />
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <AddTask
                    level1={level1}
                    is_add_new_task={is_add_new_task}
                    onDateChange={onDateChange}
                    onTimeChange={onTimeChange}
                    onDrop={onDrop}
                />
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <AddTask
                    level1={level1}
                    is_add_new_task={is_add_new_task}
                    onDateChange={onDateChange}
                    onTimeChange={onTimeChange}
                    onDrop={onDrop}
                />
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
    </Style>
});

export default Level1;

Level1.propTypes = {
    onDateChange: PropTypes.func,
    onTimeChange: PropTypes.func,
    onDrop: PropTypes.func
};
