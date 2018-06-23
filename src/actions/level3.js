import {ON_MENU_CHANGE} from "./types";

export function onMenuChange(payload) {
    return {
        type: ON_MENU_CHANGE,
        payload
    }
}
