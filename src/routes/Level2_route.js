import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {onFromDateChange, onToDateChange, onCheckboxChange, onDisableCheck} from '../actions'
import Level2 from "../components/Level2/Level2";
import {categories} from "../components/Level2/Filter/Categories/consts";

export class Level2_route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            level2={},
            onFromDateChange=()=>{},
            onToDateChange=()=>{},
            onCheckboxChange=()=>{},
            onDisableCheck=()=>{}
        } = this.props;
        return (
            <Level2
                onFromDateChange={onFromDateChange}
                onToDateChange={onToDateChange}
                level2={level2}
                categories={categories}
                onCheckboxChange={onCheckboxChange}
                onDisableCheck={onDisableCheck}
            />
        );
    }
}

function mapStateToProps({level2}) {
    return {level2, categories};
}

export default connect(mapStateToProps, {onFromDateChange, onToDateChange, onCheckboxChange, onDisableCheck})(Level2_route);

Level2_route.propTypes = {
    level2: PropTypes.object,
    onFromDateChange: PropTypes.func,
    onToDateChange: PropTypes.func,
    onCheckboxChange: PropTypes.func,
    onDisableCheck: PropTypes.func
};
