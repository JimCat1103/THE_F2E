import {ON_MENU_CHANGE, ON_OPEN_WEEK, ON_SELECT_WEEK_CHANGE} from "./types";

export function onMenuChange(payload) {
    return {
        type: ON_MENU_CHANGE,
        payload
    }
}

export function onWeekSelectClick(payload) {
    return {
        type: ON_OPEN_WEEK,
        payload
    }
}

export function onSelectWeek(payload) {
    return {
        type: ON_SELECT_WEEK_CHANGE,
        payload
    }
}