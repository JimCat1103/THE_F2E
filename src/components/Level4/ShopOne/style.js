import styled from 'styled-components';

export const Style = styled.div`
    --greenColor: #50E3C2;
    --blueColor: #4A90E2;
    --grayColor: #9B9B9B;
    --whiteColor: #ffffff;
    --blackColor: #000000;

    background: var(--whiteColor);
    max-width: 960px;
    margin: 0 auto;
    
    display: grid;
    grid-template-columns: repeat(16, 60px);
    grid-template-rows: repeat(40, 50px);
    
    .back-btn {
        grid-column: 2 / 6;
        grid-row: 1; 
        margin-left: 35px;
        margin-top: 35px;
        text-decoration: none;
        list-style: none;
        color: var(--blackColor);
        *:nth-child(1) {
            font-size: 20px;
            margin-right: 10px;
        }
        
        span {
            background: var(--blackColor);
            padding: 3px 5px;
            font-family: "Roboto Black", serif;
            font-size: 20px;
            color: var(--whiteColor);
            text-align: center;
        }
        
    }
    .title-green-fill {
        grid-column: 2 / 6;
        grid-row: 4 / 8;    
        background: var(--greenColor);
    }
    .image {
        grid-column: 3 / 15;
        grid-row: 5 / 13; 
        z-index: 2;
        background-position: 50%;
        background-size: cover;
    }
    .title-1 {
        grid-column: 1 / 15;
        grid-row: 4; 
        font-family: "Roboto Black", serif;
        font-size: 48px;
        color: var(--blackColor);
        text-align: right;
        line-height: 48px;
    }
    .title-2 {
        grid-column: 15;
        grid-row: 5 / end; 
        font-family: "Roboto Black", serif;
        font-size: 48px;
        color: var(--blackColor);
        line-height: 48px;
        writing-mode: vertical-rl;
        justify-self: flex-start;
        text-align: left;
    }
    .number {
        grid-column: 2;
        grid-row: 12;
        margin-top: -5px;
        writing-mode: vertical-rl;
        direction: rtl;
        transform: rotate(180deg);
        justify-self: end;
        font-family: "Roboto Black", serif;
        font-size: 48px;
        color: var(--blackColor);
        text-align: center;
        line-height: 48px;
    }
    .label {
        grid-column: 3 / end;
        grid-row: 13; 
        font-family: "Roboto Black", serif;
        font-size: 48px;
        color: var(--blackColor);
        text-align: right;
        line-height: 48px;
        transform: rotate(180deg);
    }
    .green-border {
        border: 20px solid var(--greenColor);
        grid-column: 8 / 16;
        grid-row: 10 / 14; 
    }
    .title-detail {
        grid-column: 3;
        grid-row: 17 / end; 
        font-family: "Roboto Black", serif;
        font-size: 24px;
        color: var(--blackColor);
        line-height: 36px;
        writing-mode: vertical-rl;
        justify-self: flex-start;
        text-align: left;
        font-style: italic;
    }
    .content {
        grid-column: 5 / 15;
        grid-row: 17 / 25; 
        
        display: grid;
        grid-template-columns: repeat(10, 60px);
        grid-template-rows: repeat(8, 50px);
        
        .title {
            grid-column: 1 / end;
            grid-row: 1; 
            
            font-family: "Roboto Black", serif;
            font-size: 48px;
            color: var(--blackColor);
            text-align: left;
            line-height: 48px;
        }
        .subtitle {
            grid-column: 1 / end;
            grid-row: 2; 
            font-family: "Roboto Black", serif;
            font-size: 24px;
            color: var(--blackColor);
            text-align: left;
            line-height: 36px;
        }
        .text {
            grid-column: 1 / end;
            grid-row: 3 / end; 
            font-family: "Roboto Regular", serif;
            font-size: 16px;
            color: var(--blackColor);
            text-align: left;
            line-height: 24px;
            
            & > div:nth-child(1) {
                margin-bottom: 20px;
            }
            
        }
    }
    
    .content-green-border {
        border: 20px solid var(--greenColor);
        grid-column: 2 / 10;
        grid-row: 30 / 34; 
    }
    
    .content-green-fill {
        grid-column: 12 / 16;
        grid-row: 29 / 33;    
        background: var(--greenColor);
    }
    .content-image-1 {
        grid-column: 3 / 9;
        grid-row: 27 / 33; 
        z-index: 2;
        background-position: 50%;
        background-size: cover;
    }
    .content-image-2 {
        grid-column: 7 / 15;
        grid-row: 31 / 39; 
        z-index: 1;
        background-position: 50%;
        background-size: cover;
    }
    .green-pattern {
        z-index: 2;
        grid-column: 4 / 8;
        grid-row: 38 / 40;
        background-image: url("/images/level4/green-pattern.svg");
    }

`;