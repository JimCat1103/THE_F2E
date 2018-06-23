import {ON_OPEN_WEEK, ON_SELECT_WEEK_CHANGE} from "../../actions/types";
import {WEEKLY} from "../../components/Level3/Home/consts";

const INITIAL_STATE = {
    is_week_select_open: false,
    week_select: WEEKLY
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_OPEN_WEEK: {
            const {payload} = action;
            return {...state, is_week_select_open: payload};
        }
        case ON_SELECT_WEEK_CHANGE: {
            const {payload} = action;
            return {...state, week_select: payload};
        }
    }
    return state;
}
