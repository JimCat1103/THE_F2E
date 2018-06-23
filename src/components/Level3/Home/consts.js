import faHandHolding from '@fortawesome/fontawesome-free-solid/faHandHolding';
import faMoneyBill from '@fortawesome/fontawesome-free-solid/faMoneyBill';
import faReceipt from '@fortawesome/fontawesome-free-solid/faReceipt';

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