import {LEVEL6_ONCHANGE, ON_NEXT_STEP, ON_PREV_STEP} from "./types";

export function onNextStep(payload) {
    return {
        type: ON_NEXT_STEP,
        payload
    }
}

export function onPrevStep(payload) {
    return {
        type: ON_PREV_STEP,
        payload
    }
}

export function onChange(value, target) {
    const payload = {value, target};
    return {
        type: LEVEL6_ONCHANGE,
        payload
    }
}
