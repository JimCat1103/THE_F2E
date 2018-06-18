import {FETCH_LEVEL1, ON_DATE_CHANGE, ON_TIME_CHANGE, ON_FILE_DROP} from "./types";

export function initLevel1() {
    return {
        type: FETCH_LEVEL1
    }
}

export function onDateChange(payload) {
    return {
        type: ON_DATE_CHANGE,
        payload
    }
}

export function onTimeChange(payload) {
    return {
        type: ON_TIME_CHANGE,
        payload
    }
}

export function onDrop(file) {
    const payload = file[0];
    return {
        type: ON_FILE_DROP,
        payload
    }
}