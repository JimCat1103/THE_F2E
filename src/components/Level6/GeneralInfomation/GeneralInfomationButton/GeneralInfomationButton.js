import React from 'react';
import {pure} from "recompose";
import {Button} from 'antd';
import {Style} from './style';
import PropTypes from "prop-types";

const GeneralInfomationButton = pure(({step_counts = 0, onNextStep = () => {}, is_general_btn_disabled = true}) => {
    return <Style disabled={is_general_btn_disabled}>
        <Button
            type="primary"
            onClick={() => onNextStep(step_counts)}
            disabled={is_general_btn_disabled}
        >
            SUBMIT & NEXT
        </Button>
    </Style>
});

export default GeneralInfomationButton;

GeneralInfomationButton.propTypes = {
    step_counts: PropTypes.number,
    onNextStep: PropTypes.func,
    is_general_btn_disabled: PropTypes.bool
};
