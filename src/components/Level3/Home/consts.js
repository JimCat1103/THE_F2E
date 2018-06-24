import faHandHolding from '@fortawesome/fontawesome-free-solid/faHandHolding';
import faMoneyBill from '@fortawesome/fontawesome-free-solid/faMoneyBill';
import faReceipt from '@fortawesome/fontawesome-free-solid/faReceipt';
import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp';
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord';
import faWordpress from '@fortawesome/fontawesome-free-brands/faWordpress';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faMale from '@fortawesome/fontawesome-free-solid/faMale';

export const DAILY = 'Daily';
export const WEEKLY = 'Weekly';
export const MONTHLY = 'Monthly';
export const YEARLY = 'Yearly';
export const CUSTOM = 'Custom';

export const week_select_data = [DAILY, WEEKLY, MONTHLY, YEARLY, CUSTOM];

export const financial_data = [
    {
        shape: faHandHolding,
        name: 'TOTAL REVENUE',
        cost: '54,540',
        cost_color: 'green'
    },
    {
        shape: faReceipt,
        name: 'TOTAL COST',
        cost: '12,660',
        cost_color: 'red'
    },
    {
        shape: faMoneyBill,
        name: 'NET INCOME',
        cost: '41,880',
        cost_color: 'blue'
    }
];

export const charts_options = {
    title: {
        text: 'Activity'
    },
    xAxis: {
        type: 'datetime',
        className: 'xAxis-styles',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        }
    },
    yAxis: {
        min: 0,
        minRange: 5
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: $ {point.y}'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    colors: ['#7ED321', '#D0021B', '#4A90E2'],

    series: [{
        name: "TOTAL REVENUE",
        data: [
            [Date.UTC(2018, 6, 6), 7400],
            [Date.UTC(2018, 6, 7), 7000],
            [Date.UTC(2018, 6, 8), 5400],
            [Date.UTC(2018, 6, 9), 7200],
            [Date.UTC(2018, 6, 10), 5800],
            [Date.UTC(2018, 6, 11), 6200],
            [Date.UTC(2018, 6, 12), 7600],
            [Date.UTC(2018, 6, 13), 7200]
        ]
    }, {
        name: "TOTAL COST",
        data: [
            [Date.UTC(2018, 6, 6), 600],
            [Date.UTC(2018, 6, 7), 600],
            [Date.UTC(2018, 6, 8), 2600],
            [Date.UTC(2018, 6, 9), 3000],
            [Date.UTC(2018, 6, 10), 2400],
            [Date.UTC(2018, 6, 11), 600],
            [Date.UTC(2018, 6, 12), 900],
            [Date.UTC(2018, 6, 13), 2000]
        ]
    }, {
        name: "NET INCOME",
        data: [
            [Date.UTC(2018, 6, 6), 6100],
            [Date.UTC(2018, 6, 7), 5200],
            [Date.UTC(2018, 6, 8), 2000],
            [Date.UTC(2018, 6, 9), 4000],
            [Date.UTC(2018, 6, 10), 3600],
            [Date.UTC(2018, 6, 11), 5200],
            [Date.UTC(2018, 6, 12), 6400],
            [Date.UTC(2018, 6, 13), 5000]
        ]
    }]
};

export const left_table_list_data = [
    {
        Icon: faFacebook,
        name: 'Facebook.com',
        cost: '45,836',
        arrow: faArrowUp,
        arrow_number: '20%',
        arrow_color: 'green'
    },
    {
        Icon: faGoogle,
        name: 'google.com',
        cost: '23,582',
        arrow: faArrowUp,
        arrow_number: '12%',
        arrow_color: 'green'
    },
    {
        Icon: faDiscord,
        name: 'discord.com',
        cost: '2,489',
        arrow: faArrowDown,
        arrow_number: '15%',
        arrow_color: 'red'
    },
    {
        Icon: faWordpress,
        name: 'Wordpress.com',
        cost: '1,057',
        arrow: faArrowDown,
        arrow_number: '30%',
        arrow_color: 'red'
    }
];

export const right_table_list_data = [
    {
        image: '/images/125x125.png',
        name: 'Vintage T-shirt',
        date_icon: faClock,
        date: '2018/6/13  13:42',
        user_icon: faMale,
        user: 'Belle Willis',
        cost_title: 'total',
        cost: '3,200'
    },
    {
        image: '/images/125x125.png',
        name: 'Cowboy Jacket',
        date_icon: faClock,
        date: '2018/6/13  10:45',
        user_icon: faMale,
        user: 'Adrian Cummings',
        cost_title: 'total',
        cost: '2,800'
    },
    {
        image: '/images/125x125.png',
        name: 'Coach Coat',
        date_icon: faClock,
        date: '2018/6/13  8:26',
        user_icon: faMale,
        user: 'Lura Holland',
        cost_title: 'total',
        cost: '1,600'
    }
];