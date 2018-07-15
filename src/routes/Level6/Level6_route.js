import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Level6 from "../../components/Level6/Level6";
import {onChange, onNextStep, onPrevStep} from '../../actions';

export class Level6_route extends Component {
    render() {
        const {level6 = {}, onNextStep=()=>{}, onPrevStep=()=>{}, onChange=()=>{}} = this.props;
        const {step_counts} = level6;
        console.log(level6);
        return <Level6
            step_counts={step_counts}
            onNextStep={onNextStep}
            onPrevStep={onPrevStep}
            level6={level6}
            onChange={onChange}
        />
    }
}

function mapStateToProps({level6}) {
    return {level6};
}

export default connect(mapStateToProps, {onNextStep, onPrevStep, onChange})(Level6_route);

Level6_route.propTypes = {
    level6: PropTypes.object,
    onNextStep: PropTypes.func,
    onPrevStep: PropTypes.func,
    onChange: PropTypes.func
};
