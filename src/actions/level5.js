import {ON_STARRATE_CLICK} from "./types";

export function onStarRateClick(payload) {
    console.log(payload);
    return {
        type: ON_STARRATE_CLICK,
        payload
    }
}