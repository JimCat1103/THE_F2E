import React from 'react';
import _ from 'lodash';
import {compose, defaultProps, pure, withHandlers} from "recompose";
import PropTypes from "prop-types";
import Select from "react-select";
import {Style} from "./style";
import {get_day_options, month_options, year_options} from "../date_consts";
import NameInput from "./NameInput/NameInput";
import PhoneInput from "./PhoneInput/PhoneInput";


const enhance = compose(
    defaultProps({onChange: ()=>{}}),
    withHandlers({
        handleYearChange: ({onChange}) => (obj, year_select) => {
            if(obj) {
                if(obj.value !== year_select.value) {
                    onChange(obj, 'year_select');
                    onChange({
                        value: '',
                        label: ''
                    }, 'month_select');
                    onChange({
                        value: '',
                        label: ''
                    }, 'day_select');
                }
            }
            else {
                onChange({
                    value: '',
                    label: ''
                }, 'year_select');
            }
        },
        handleMonthChange: ({onChange}) => (obj, month_select) => {
            if(obj) {
                if(obj.value !== month_select.value) {
                    onChange(obj, 'month_select');
                    onChange({
                        value: '',
                        label: ''
                    }, 'day_select');
                }
            }
            else {
                onChange({
                    value: '',
                    label: ''
                }, 'month_select');
            }
        },
        handleDayChange: ({onChange}) => (obj) => {
            if(obj) {
                onChange(obj, 'day_select');
            }
            else {
                onChange({
                    value: '',
                    label: ''
                }, 'day_select');
            }
        }
    })
);

const GeneralInfomation = pure(({
    username='',
    is_username_empty=false,
    cellphone,
    is_cellphone=false,
    onChange=()=>{},
    year_select,
    handleYearChange=()=>{},
    month_select,
    day_select,
    handleMonthChange=()=>{},
    handleDayChange=()=>{}
}) => {
    const day_options = get_day_options(year_select.value, month_select.value);
    return <Style>
        <div className='title'>General Infomation</div>
        <div className='subtitle'>Tell us who you are!</div>

        <div className='name-and-phone'>
            <div><NameInput value={username} onChange={(value)=> onChange(value, 'username')} is_username_empty={is_username_empty} /></div>
            <div><PhoneInput value={cellphone} onChange={(value)=> onChange(value, 'cellphone')} is_cellphone={is_cellphone}/></div>
        </div>

        <div className='birthday-picker'>
            <div className='title'>Birth Date (optional)</div>
            <div className='content'>
                <div>
                    <Select
                        className='each-birthday-select'
                        name="select-year"
                        id="select-year"
                        options={year_options}
                        placeholder='請選擇年份'
                        onChange={(obj) => {handleYearChange(obj, year_select)}}
                        value={_.isEmpty(year_select.value) ? '請選擇年份' : year_select}
                        noOptionsMessage={() => '找不到資料'}
                    />
                </div>
                <div>
                    <Select
                        className='each-birthday-select'
                        name="select-month"
                        id="select-month"
                        options={month_options}
                        placeholder='請選擇月份'
                        onChange={(obj) => {handleMonthChange(obj, month_select)}}
                        value={_.isEmpty(month_select.value) ? '請選擇月份' : month_select}
                        noOptionsMessage={() => '找不到資料'}
                    />
                </div>
                <div>
                    <Select
                        className='each-birthday-select'
                        name="select-day"
                        id="select-day"
                        options={day_options}
                        placeholder='請選擇日期'
                        onChange={(obj) => {handleDayChange(obj)}}
                        value={(day_select.value === '') ? '請選擇日期' : day_select}
                        noOptionsMessage={() => '找不到資料'}
                    />
                </div>
            </div>
        </div>
    </Style>
});

export default enhance(GeneralInfomation);

GeneralInfomation.propTypes = {
    username: PropTypes.string,
    is_username_empty: PropTypes.bool,
    cellphone: PropTypes.string,
    is_cellphone: PropTypes.bool,
    onChange: PropTypes.func,
    year_select: PropTypes.object,
    handleYearChange: PropTypes.func,
    month_select: PropTypes.object,
    day_select: PropTypes.object,
    handleMonthChange: PropTypes.func,
    handleDayChange: PropTypes.func
};
