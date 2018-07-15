import React from 'react';
import _ from 'lodash';
import {pure} from "recompose";
import PropTypes from "prop-types";
import {Button, message, Steps} from 'antd';
import {Style} from "./style";
import validateUtil from "./validateUtil";
import CreateAccount from "./CreateAccount/CreateAccount";
import AccountButton from "./CreateAccount/AccountButton/AccountButton";
import GeneralInfomation from "./GeneralInfomation/GeneralInfomation";
import GeneralInfomationButton from "./GeneralInfomation/GeneralInfomationButton/GeneralInfomationButton";

const Step = Steps.Step;
const steps = [
    {
        title: '',
        content: CreateAccount,
        button: AccountButton
    },
    {
        title: '',
        content: GeneralInfomation,
        button: GeneralInfomationButton
    },
    {
        title: '',
        content: CreateAccount,
        button: AccountButton
    },
    {
        title: '',
        content: CreateAccount,
        button: AccountButton
    }
];

function renderContent(ContentComponent, ButtonComponent, {level6, onChange, onNextStep, onPrevStep}) {
    const {
        step_counts,
        account,
        password,
        password_confirm,
        username,
        cellphone,
        year_select,
        month_select,
        day_select
    } = level6;
    const is_account = validateUtil.is_email_format(account);
    const is_password = validateUtil.is_password(password);
    const is_password_confirm = password === password_confirm;
    const is_account_btn_disabled = !(is_account && is_password && is_password_confirm);
    const is_username_empty = !_.isEmpty(username);
    const is_cellphone = validateUtil.is_cellphone(cellphone);
    const is_general_btn_disabled = true;

    return <div className='steps-container'>
        <ContentComponent
            is_account={is_account}
            account={account}
            password={password}
            is_password={is_password}
            password_confirm={password_confirm}
            is_password_confirm={is_password_confirm}
            onChange={onChange}
            username={username}
            is_username_empty={is_username_empty}
            cellphone={cellphone}
            is_cellphone={is_cellphone}
            year_select={year_select}
            month_select={month_select}
            day_select={day_select}
        />
        <div className="steps-action">
            {
                step_counts < steps.length - 1
                && <ButtonComponent
                    step_counts={step_counts}
                    onNextStep={onNextStep}
                    is_account_btn_disabled={is_account_btn_disabled}
                    is_general_btn_disabled={is_general_btn_disabled}
                />
            }
            {
                step_counts === steps.length - 1
                && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
            }
            {
                step_counts > 0
                && (
                    <Button style={{ marginLeft: 8 }} onClick={() => onPrevStep(step_counts)}>
                        Previous
                    </Button>
                )
            }
        </div>
    </div>;
}

const Level6 = pure(({
    level6={},
    step_counts = 0,
    onNextStep=()=>{},
    onPrevStep=()=>{},
    onChange=()=>{}
}) => {

    return <Style>
        <div className='top-blue-line'></div>
        <div className='steps-step'>
            <Steps current={step_counts}>
                {steps.map((item, index) => <Step key={`${item.title}${index}`} title={item.title}/>)}
            </Steps>
        </div>
        {
            renderContent(steps[step_counts].content, steps[step_counts].button, {level6, onChange, onNextStep, onPrevStep})
        }
    </Style>
});

export default Level6;

Level6.propTypes = {
    level6: PropTypes.object,
    step_counts: PropTypes.number,
    onNextStep: PropTypes.func,
    onPrevStep: PropTypes.func,
    onChange: PropTypes.func
};
