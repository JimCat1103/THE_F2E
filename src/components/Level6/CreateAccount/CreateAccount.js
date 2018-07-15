import React from 'react';
import {pure} from "recompose";
import PropTypes from "prop-types";
import {Style} from "./style";
import AccountInput from "./AccountInput/AccountInput";
import PasswordInput from "./PasswordInput/PasswordInput";
import {PASSWORD_FORMAT} from "../msg_consts";

const CreateAccount = pure(({
    account='',
    is_account=false,
    password='',
    is_password=false,
    is_password_confirm=false,
    password_confirm='',
    onChange=()=>{}
}) => {
    const error_password = !is_password ? PASSWORD_FORMAT : '';
    const error_password_confirm = !is_password_confirm ? '請再次輸入一樣的密碼' : '';
    return <Style>
        <div className='title'>Create Account</div>
        <div className='subtitle'>Glad to see you here!</div>

        <AccountInput value={account} onChange={(value)=> onChange(value, 'account')} is_account={is_account}/>
        <PasswordInput value={password} onChange={(value)=> onChange(value, 'password')} errorText={error_password}/>
        <PasswordInput value={password_confirm} onChange={(value)=> onChange(value, 'password_confirm')} errorText={error_password_confirm} title='Confirm Password' />
    </Style>
});

export default CreateAccount;

CreateAccount.propTypes = {
    account: PropTypes.string,
    is_account: PropTypes.bool,
    password: PropTypes.string,
    is_password: PropTypes.bool,
    is_password_confirm: PropTypes.bool,
    password_confirm: PropTypes.string,
    onChange: PropTypes.func
};
