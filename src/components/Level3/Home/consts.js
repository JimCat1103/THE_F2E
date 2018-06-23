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
]