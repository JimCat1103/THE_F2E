import {ON_MENU_CHANGE} from "../../actions/types";

const INITIAL_STATE = {
    is_active: 'home'
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_MENU_CHANGE: {
            const {payload} = action;
            return {...state, is_active: payload};
        }
    }
    return state;
}
