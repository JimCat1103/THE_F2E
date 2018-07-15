import {LEVEL6_ONCHANGE, ON_NEXT_STEP, ON_PREV_STEP} from "../../actions/types";

const INITIAL_STATE = {
    step_counts: 0,
    account: '',
    password: '',
    password_confirm: '',
    username: '',
    cellphone: '',
    year_select: {
        value: '',
        label: ''
    },
    month_select: {
        value: '',
        label: ''
    },
    day_select: {
        value: '',
        label: ''
    }
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_NEXT_STEP: {
            const {payload} = action;
            return {...state, step_counts: payload+1};
        }
        case ON_PREV_STEP: {
            const {payload} = action;
            return {...state, step_counts: payload-1};
        }
        case LEVEL6_ONCHANGE: {
            const {payload} = action;
            const {value, target} = payload;
            return {...state, [target]: value};
        }
    }
    return state;
}
