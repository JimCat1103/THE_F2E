import {FETCH_LEVEL1, ON_DATE_CHANGE, ON_FILE_DROP, ON_TIME_CHANGE} from "../../actions/types";
import moment from 'moment';

const INITIAL_STATE = {
    is_add_new_task: false,
    startDate: moment(),
    startTime: moment(),
    uploadFile: [],
    files: [],

    allTask: [
        {
            title: 'First Task',
            date: '2018/08/22',
            attachments: [],
            comments: '123512353215',
            is_completed: false,
            is_marked: false
        },
        {
            title: 'Second Task',
            date: '2018/08/23',
            attachments: [],
            comments: '00000000000000',
            is_completed: true,
            is_marked: true
        }
    ]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LEVEL1:{
            return state;
        }
        case ON_DATE_CHANGE: {
            return {...state, startDate: action.payload}
        }
        case ON_TIME_CHANGE: {
            return {...state, startTime: action.payload}
        }
        case ON_FILE_DROP: {
            const { payload } = action;
            const newState = state.files;
            const files = newState.push(payload);
            return {...state, ...files}
        }
    }
    return state;
}
