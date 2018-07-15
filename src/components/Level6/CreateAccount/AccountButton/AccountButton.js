import React from 'react';
import {pure} from "recompose";
import {Button} from 'antd';
import PropTypes from "prop-types";
import {Style} from './style';

const AccountButton = pure(({step_counts = 0, onNextStep = () => {}, is_account_btn_disabled = true}) => {
    return <Style disabled={is_account_btn_disabled}>
        <Button
            type="primary"
            onClick={() => onNextStep(step_counts)}
            disabled={is_account_btn_disabled}
        >
            SUBMIT & NEXT
        </Button>
    </Style>
});

export default AccountButton;

AccountButton.propTypes = {
    step_counts: PropTypes.number,
    onNextStep: PropTypes.func,
    is_account_btn_disabled: PropTypes.bool
};
