import _ from 'lodash';

export default class validateUtil {
    static is_email_format(email="") {
        const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    static is_password(password) {
        if (_.isEmpty(password) || password.trim().length < 6) {
            return false;
        }
        else{
            return true;
        }
    }

    static is_cellphone(text) {
        const regex = /^09[0-9]{2}[-]?[0-9]{3}[-]?[0-9]{3}$/;
        return !_.isEmpty(text) && regex.test(text);
    }
}