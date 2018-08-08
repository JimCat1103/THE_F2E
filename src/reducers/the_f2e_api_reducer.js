import {GET_CERTIFICATE} from "../actions/types";

const INITIAL_STATE = {
    certificate: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CERTIFICATE: {
            const {payload} = action;
            return {...state, certificate: payload};
        }
    }
    return state;
}
