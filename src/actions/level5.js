import {FETCH_COMIC, FETCH_COMICS, ON_STARRATE_CLICK} from "./types";
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

export function fetchComic(id) {
    const payload = comic_data.filter((data) => {
        return data.id === id;
    });

    return {
        type: FETCH_COMIC,
        payload: payload
    }
}