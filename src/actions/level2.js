import {ON_FROM_DATE, ON_TO_DATE, ON_CHECKBOX_CHANGE, ON_DISABLE_CHECK} from "./types";

export function onFromDateChange(payload) {
    return {
        type: ON_FROM_DATE,
        payload
    }
}

export function onToDateChange(payload) {
    return {
        type: ON_TO_DATE,
        payload
    }
}

export function onCheckboxChange(target, is_checked) {
    const payload = {target, is_checked};
    return {
        type: ON_CHECKBOX_CHANGE,
        payload
    }
}

export function onDisableCheck(target, is_checked) {
    const payload = {target, is_checked};
    return {
        type: ON_DISABLE_CHECK,
        payload
    }
}