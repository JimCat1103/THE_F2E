import {ON_FROM_DATE, ON_TO_DATE, ON_CHECKBOX_CHANGE, ON_DISABLE_CHECK} from "../actions/types";
import moment from "moment/moment";

const INITIAL_STATE = {
    fromDate: moment(),
    toDate: moment(),
    is_all_checked: false,
    is_entertainment_checked: false,
    is_food_checked: false,
    is_learning_checked: false,
    is_outdoors_checked: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_FROM_DATE: {
            return {...state, fromDate: action.payload}
        }
        case ON_TO_DATE: {
            return {...state, toDate: action.payload}
        }
        case ON_CHECKBOX_CHANGE: {
            const {payload} = action;
            const {target, is_checked} = payload;
            return {...state, [target]: is_checked}
        }
        case ON_DISABLE_CHECK: {
            const {payload} = action;
            const {target, is_checked} = payload;
            return {...state, [target]: is_checked}
        }
    }
    return state;
}
