import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from './style';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddTaskButton from "./AddTaskButton/AddTaskButton";
import EditTask from "./EditTask/EditTask";

const Level1 = pure(({level1={}, onDateChange=()=>{}, onTimeChange=()=>{}, onDrop=()=>{}})=>{
    return <Style>
        <Tabs className='tab-wrap'>
            <TabList className='tab-top'>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                <Tab>Title 3</Tab>
            </TabList>

            <TabPanel>
                <AddTaskButton/>
                <EditTask onDateChange={onDateChange} onTimeChange={onTimeChange} onDrop={onDrop} level1={level1} />
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
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
