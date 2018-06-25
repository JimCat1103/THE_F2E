import styled from 'styled-components';

export const Style = styled.div`
    --redColor: #D0021B;
    --greenColor: #7ED321;
    --blueColor: #4A90E2;
    --grayColor: #9B9B9B;
    --whiteColor: #ffffff;
    --blackColor: #000000;

    background: var(--whiteColor);

    .green {
        color: var(--greenColor);
    }
    .red {
        color: var(--redColor);
    }
    .blue {
        color: var(--blueColor);
    }
    
    .product-list-title {
        width: auto;
        text-align: center;
        padding-top: 16px;
        & > div:nth-child(1) {
            display: inline-block;
            width: auto;
            padding: 0 5px;
            font-family: Roboto-Black, serif;
            font-size: 20px;
            color: var(--whiteColor);
            background: var(--blackColor);
        }
        & > div:nth-child(2) {
            font-family: Roboto-Black, serif;
            font-size: 72px;
            line-height: 1.2;
            color: var(--blackColor);
        }
    }


    @media screen and (max-width: 767px) {
        .product-list-title {
            & > div:nth-child(1) {
                font-size: 18px;
            }
            & > div:nth-child(2) {
                font-size: 36px;
            }
        }
    }
`;