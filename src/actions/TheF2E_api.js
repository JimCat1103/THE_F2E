import axios from 'axios';
import {GET_CERTIFICATE} from './types';

export function getCertificate(response) {
    const payload = response.data.Certificate;
    return {
        type: GET_CERTIFICATE,
        payload
    }
}

export function fetchTheF2eApi() {
    return(dispatch) => {
        axios.post('https://www.thef2e.com/api/isSignUp', {email: 'jim19901103@gmail.com'})
            .then((response) => {dispatch(getCertificate(response));})
            .catch((response) => {return Promise.reject(response);});
    };
}