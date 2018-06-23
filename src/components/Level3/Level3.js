import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Style} from "./style";
import {WEEKLY, week_select_data, financial_data, charts_options} from './Home/consts';

const Level3 = pure(({is_week_select_open=false, onWeekSelectClick=()=>{}, week_select=WEEKLY, onSelectWeek=()=>{}})=>{
    return <Style>
        <div className='info'>
            <div className='left'>
                OVERVIEW
            </div>
            <div className='right'>
                <div className='dates'>
                    <span>2018/6/6</span>
                    <i><FontAwesomeIcon icon={faCaretRight}/></i>
                    <span>2018/6/13</span>
                </div>
                <div className='week' onClick={() => onWeekSelectClick(!is_week_select_open)}>
                    <span>{week_select}</span>
                    <i><FontAwesomeIcon icon={faCaretDown}/></i>

                    <div className={`week-select ${is_week_select_open ? 'week-open' : ''}`}>
                        {week_select_data.map((name, index) => {
                            return <div key={`week_select_${index}`} onClick={() => onSelectWeek(name)}>{name}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className='financial-info'>
            {financial_data.map((data, index) => {
                const {shape, name, cost, cost_color} = data;
                return <div key={`financial_data_${index}`}>
                    <div className='title'>
                        <i><FontAwesomeIcon icon={shape}/></i>
                        <span>{name}</span>
                    </div>
                    <div className={`cost ${cost_color}`}>{cost}</div>
                </div>
            })}
        </div>

        <div className='charts'>
            <HighchartsReact
                highcharts={Highcharts}
                options={charts_options}
            />
        </div>
    </Style>
});

export default Level3;

Level3.propTypes = {
    is_week_select_open: PropTypes.bool,
    onWeekSelectClick: PropTypes.func,
    week_select: PropTypes.string,
    onSelectWeek: PropTypes.func
};