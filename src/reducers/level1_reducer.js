import {FETCH_LEVEL1, ON_DATE_CHANGE, ON_FILE_DROP, ON_TIME_CHANGE} from "../actions/types";
import moment from 'moment';
import _ from 'lodash';

const INITIAL_STATE = {
    is_write_task: false,
    startDate: moment(),
    startTime: moment(),
    uploadFile: [],
    files: []
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
            const chatbot = {
                name: 'chatbot',
                title: '診所粉絲團預約機器人',
                subtitle: '讓自動預約機器人幫您打造最便利的預約管理系統',
                content: ['綁定FB粉絲團引導民眾便利預約', '預約或即時推播訊息', '管理診所及醫師專業看診資料', '預約紀錄管理'],
            };
            console.log(_.keys(chatbot).map((x) => {
                console.log(chatbot[x]);
            }));

            const newState = state.files;
            const files = newState.push(payload);
            return {...state, ...files}
        }
    }
    return state;
}
