import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level3 from "../../components/Level3/Level3";
import {onWeekSelectClick, onSelectWeek} from '../../actions';
import {WEEKLY} from "../../components/Level3/Home/consts";

export class Level3_route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            level3 = {},
            onWeekSelectClick = () => {},
            onSelectWeek = () => {}
        } = this.props;
        const {is_week_select_open = false, week_select = WEEKLY} = level3;
        return (
            <Level3
                is_week_select_open={is_week_select_open}
                onWeekSelectClick={onWeekSelectClick}
                week_select={week_select}
                onSelectWeek={onSelectWeek}
            />
        );
    }
}

function mapStateToProps({level3}) {
    return {level3};
}

export default connect(mapStateToProps, {onWeekSelectClick, onSelectWeek})(Level3_route);

Level3_route.propTypes = {
    level3: PropTypes.object,
    onWeekSelectClick: PropTypes.func,
    onSelectWeek: PropTypes.func
};
