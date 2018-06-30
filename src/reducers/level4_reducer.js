import {FETCH_LEVEL4, FETCH_LEVEL4_ONE} from "../actions/types";

const INITIAL_STATE = {
    shop_title: 'CCCLOTHES',
    shop_subtitle: 'MEN’S TOPS'
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LEVEL4: {
            const {payload} = action;
            return {...state, shop_data: payload};
        }
        case FETCH_LEVEL4_ONE: {
            const {payload} = action;
            return {...state, shop_data: payload};
        }
    }

    return state;
}
