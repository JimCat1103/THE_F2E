import {FETCH_LEVEL4, FETCH_LEVEL4_ONE} from './types';
import {shop_data} from '../components/Level4/consts';

export function fetchShopDatas() {
    const payload = shop_data;
    return {
        type: FETCH_LEVEL4,
        payload
    }
}

export function fetchShopData(id) {
    const payload = shop_data.filter((data) => {
        return data.number === id;
    });

    return {
        type: FETCH_LEVEL4_ONE,
        payload: payload
    }
}