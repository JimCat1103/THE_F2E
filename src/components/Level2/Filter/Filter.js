import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";
import {Style} from "./style";

const Filter = pure(({level2={}, onFromDateChange=()=>{}, onToDateChange=()=>{}, categories=[], onCheckboxChange=()=>{}})=>{
    const {fromDate, toDate} = level2;
    return <Style>
        <div className='filter-container'>
            <div className='filter-wrap'>
                <div>Location</div>
                <div className='location-wrap'>
                    <select id="flavorShot" className="form-control" name="flavor">
                        <option value="">Koahsiung</option>
                    </select>
                </div>
            </div>
            <div className='border-line'></div>
            <div className='filter-wrap'>
                <div>Date</div>
                <div className='date-wrap'>
                    <div>from</div>
                    <DatePicker
                        className='date-picker-wrap'
                        relativeSize={true}
                        selected={fromDate}
                        onChange={fromDate => onFromDateChange(fromDate)}
                    />
                </div>
                <div className='date-wrap'>
                    <div>to</div>
                    <DatePicker
                        className='date-picker-wrap'
                        relativeSize={true}
                        selected={toDate}
                        onChange={toDate => onToDateChange(toDate)}
                    />
                </div>
            </div>
            <div className='border-line'></div>

            <div className='filter-wrap'>
                <div>Categories</div>
                <div className='categories-wrap'>
                    {
                        categories.map((data, index) => {
                            const {name, value} = data;
                            const checked = level2[value];
                            return (
                                <FormControlLabel
                                    key={`categories_${index}`}
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(e, checked)=>onCheckboxChange(value, checked)}
                                            value={value}
                                        />
                                    }
                                    label={name}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </Style>
});

export default Filter;

Filter.propTypes = {
    level2: PropTypes.object,
    onFromDateChange: PropTypes.func,
    onToDateChange: PropTypes.func,
    categories: PropTypes.array,
    onCheckboxChange: PropTypes.func
};
