import moment from 'moment';

const now_year = moment().year();
const init_year = now_year - 120;
export const year_options = get_years();
export const month_options = get_month();

function get_years() {
    let options = [];
    for(let i = init_year; i<=now_year;i++){
        let option = {
            value: `${i}`,
            label: `${i}年`
        };
        options.push(option);
    }

    return options;
}

function get_month() {
    let options = [];

    for(let i = 1; i <=12; i++){
        let option = {
            value: `${i}`,
            label: `${i}月`
        };
        options.push(option);
    }

    return options;
}

export function get_day_options(year, month) {
    if(year !== '' && month !== '') {
        let options = [];
        let max = (new Date(year,month, 0)).getDate();
        for (let i=1; i <= max; i++) {
            options.push({
                value: `${i}`,
                label: `${i}日`
            })
        }
        return options;
    } else {
        let options = [{
            value: '',
            label: '請先選擇年月份'
        }];
        return options;
    }
}
