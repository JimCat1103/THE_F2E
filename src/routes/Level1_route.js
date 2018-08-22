import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {initLevel1, onDateChange, onDrop, onTimeChange} from '../actions'
import Level1 from '../components/Level1/Level1';

export class Level1_route extends Component {
    componentWillMount() {
        const {initLevel1 = () =>{}} = this.props;
        initLevel1();
    }

    render() {
        const {level1 = {}, inProgressTask = [], completedTask=[], onDateChange = () =>{}, onTimeChange=()=>{}, onDrop=()=>{}} = this.props;
        return <Level1
            level1={level1}
            onDateChange={onDateChange}
            onTimeChange={onTimeChange}
            onDrop={onDrop}
            inProgressTask={inProgressTask}
            completedTask={completedTask}
        />
    }
}

function mapStateToProps({level1}) {
    const {allTask} = level1;
    const inProgressTask = allTask.filter((v) => v.is_completed === false);
    const completedTask = allTask.filter((v) => v.is_completed === true);
    return {level1, inProgressTask, completedTask};
}

export default connect(mapStateToProps, {initLevel1, onDateChange, onTimeChange, onDrop})(Level1_route);

Level1_route.propTypes = {
    level1: PropTypes.object,
    initLevel1: PropTypes.func,
    onDateChange: PropTypes.func,
    onTimeChange: PropTypes.func,
    onDrop: PropTypes.func
};
