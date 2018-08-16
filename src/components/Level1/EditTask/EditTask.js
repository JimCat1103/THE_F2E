import React from 'react';
import {pure} from 'recompose';
import {Style} from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropzone from "react-dropzone";
import Checkbox from "@material-ui/core/Checkbox";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt';
import faFile from '@fortawesome/fontawesome-free-solid/faFile';
import faCommentDots from '@fortawesome/fontawesome-free-solid/faCommentDots';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const EditTask = pure(({level1 ={}, onDateChange=()=>{}, onTimeChange=()=>{}, onDrop=()=>{}})=>{
    const {startDate, startTime, files} = level1;
    console.log(files);
    return <Style>
        <div className='title'>
            <div className='done-checkbox'>
                <Checkbox
                    checked={false}
                    onChange={()=>{}}
                />
            </div>
            <div className='title-input'>
                <input
                    type='input'
                    placeholder='Type Something Here…'
                />
            </div>
            <div className='my-favorite'>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className='edit-btn'>
                <FontAwesomeIcon icon={faPencilAlt} />
            </div>
        </div>

        <div className='content'>
            <div className='date-and-time'>
                <div className='date-title'>
                    <div><FontAwesomeIcon icon={faCalendarAlt} /></div>
                    <div>DeadLine</div>
                </div>
                <div className='picker'>
                    <div className='date'>
                        <DatePicker
                            className='date-picker-wrap'
                            relativeSize={true}
                            selected={startDate}
                            onChange={startDate => onDateChange(startDate)}
                            popperClassName='date-picker-popper'
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
                <div className='upload-file-title'>
                    <div><FontAwesomeIcon icon={faFile} /></div>
                    <div>File</div>
                </div>

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
                <div className='edit-content-title'>
                    <div><FontAwesomeIcon icon={faCommentDots} /></div>
                    <div>Comment</div>
                </div>
                <div>
                    <textarea placeholder='Type your memo here…'></textarea>
                </div>
            </div>
        </div>
        <img src="" alt=""/>
        <div className='edit-footer'>
            <div>
                <div>
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Cancel</span>
                </div>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Add Task</span>
                </div>
            </div>
        </div>
    </Style>
});

export default EditTask;

EditTask.propTypes = {

};
