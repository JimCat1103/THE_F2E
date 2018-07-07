import {FETCH_COMICS, ON_STARRATE_CLICK} from "./types";
import {comic_data} from "../components/Level5/const";

export function onStarRateClick(payload) {
    return {
        type: ON_STARRATE_CLICK,
        payload
    }
}

export function fetchComics() {
    const payload = comic_data;
    return {
        type: FETCH_COMICS,
        payload
    }
}