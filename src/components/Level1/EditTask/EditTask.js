import React from 'react';
import PropTypes from "prop-types";
import {pure} from 'recompose';
import {Style} from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropzone from "react-dropzone";

const EditTask = pure(({level1 ={}, onDateChange=()=>{}, onTimeChange=()=>{}, onDrop=()=>{}})=>{
    const {startDate, startTime, files} = level1;
    console.log(files);
    return <Style>
        <div className='title'>
            <div><input type='checkbox' /></div>
            <div><div className='title-input'><input type='input'/></div></div>
            <div>start</div>
            <div>edit</div>
        </div>

        <div className='content'>
            <div className='date-and-time'>
                <div>DeadLine</div>
                <div className='picker'>
                    <div className='date'>
                        <DatePicker
                            className='date-picker-wrap'
                            relativeSize={true}
                            selected={startDate}
                            onChange={startDate => onDateChange(startDate)}
                        />
                    </div>
                    <div className='time'>
                        <DatePicker
                            className='date-picker-wrap'
                            relativeSize={true}
                            selected={startTime}
                            onChange={startDate => onTimeChange(startDate)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="LT"
                            timeCaption="Time"
                        />
                    </div>
                </div>
            </div>

            <div className='upload-file'>
                <div>File</div>
                <section>
                    <div className="dropzone">
                        <Dropzone
                            className='dropzone-wrap'
                            onDrop={(files)=>onDrop(files)}
                            multiple={true}>
                        </Dropzone>
                    </div>
                    <div className='dropzone-file-wrap'>
                        <aside>
                            <ul>
                                {
                                    files.map((f) => {
                                        const get_date = (f.lastModifiedDate).toString();
                                        return <li key={f.name}>
                                            <div>{f.name}</div>
                                            <div>{`uploaded - ${get_date}`}</div>
                                        </li>
                                    } )
                                }
                            </ul>
                        </aside>
                    </div>
                </section>
            </div>
            
            <div className='edit-content'>
                <div>Comment</div>
                <div>
                    <textarea placeholder='Type your memo here…'></textarea>
                </div>
            </div>
        </div>
        <img src="" alt=""/>
        <div className='edit-footer'></div>
    </Style>
});

export default EditTask;

EditTask.propTypes = {

};
