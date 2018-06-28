import styled from 'styled-components';

export const Style = styled.div`
    --redColor: #D0021B;
    --greenColor: #7ED321;
    --blueColor: #4A90E2;
    --grayColor: #9B9B9B;
    --whiteColor: #ffffff;
    --blackColor: #000000;

    background: var(--whiteColor);
    max-width: 960px;
    margin: 0 auto;
    border: solid 1px red;

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

    .product-list {
        display: grid;
        grid-template-columns: repeat(16, 60px);
        grid-template-rows: repeat(38, 50px);
        
        .item-1 {
            grid-column: 1 / 10;
            grid-row: 2 / 12; 
            
            display: grid;
            grid-template-columns: repeat(9, 60px);
            grid-template-rows: repeat(10, 50px);

            .content {
                grid-column: 1 / 9;
                grid-row: 2 / 10; 
                
                background: url("/images/level4/item-1.jpg") 50%;
                background-size: cover;
            }
            .green-border {
                border: 20px solid #50E3C2;
                grid-column: 6 / end;
                grid-row: 1 / 5; 
            }
            .title {
                font-family: "Roboto Black", serif;
                grid-column: 1 / end;
                grid-row: 2; 
                font-size: 48px;
                color: #000000;
                text-align: left;
                line-height: 48px;
                margin-top: -12px;
                z-index: 2;
                position: relative;
                &::before {
                    content:  attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.30);
                    top: -16px;
                    left: 0;
                    height: 22px;
                    overflow: hidden;
                }
                &::after {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.10);
                    top: -24px;
                    left: 0;
                    height: 13px;
                    overflow: hidden;
                }
            }
            .number {
                grid-column: 1 / 2;
                grid-row: 10 / end;
                
                font-family: "Roboto Black", serif;
                font-size: 48px;
                color: #000000;
                text-align: center;
                line-height: 48px;
            }        
            .green-pattern {
                grid-column: 2 / 6;
                grid-row: 9 / end;
                background-image: url("/images/level4/green-pattern.svg");
            }
            .subtitle {
                grid-column: 9 / end;
                grid-row: 8 / end;
                
                font-family: "Roboto", serif;
                font-weight: bold;
                font-style: italic;
                writing-mode: vertical-lr;
                font-size: 24px;
                color: #000000;
                text-align: left;
            }
        }
  
        .item-2 {
            grid-column: 11 / end;
            grid-row: 3 / 10; 
            
            display: grid;
            grid-template-columns: repeat(6, 60px);
            grid-template-rows: repeat(7, 50px);
            
            .green-border {
                border: 20px solid #50E3C2;
                grid-column: 3 / end;
                grid-row: 1 / 5; 
            }
            .number {
                grid-column: 6 / end;
                grid-row: 1;
                
                font-family: "Roboto Black", serif;
                font-size: 48px;
                color: #000000;
                text-align: center;
                line-height: 48px;
            }
            .green-border-fill {
                background: #50E3C2;
                grid-column: 2 / 6;
                grid-row: 2 / 6; 
            }
            .subtitle {
                grid-column: 1 / end;
                grid-row: 2;
                margin-left: -18px;
                margin-bottom: -5px;
                font-family: "Roboto", serif;
                font-weight: bold;
                font-style: italic;
                font-size: 24px;
                color: #000000;
                text-align: left;
                align-self: self-end;
            }
            .content {
                grid-column: 1 / 5;
                grid-row: 3 / 7; 
                
                background: url("/images/level4/item-2.jpg") 50%;
                background-size: cover;
            }
            .title {
                font-family: "Roboto Black", serif;
                grid-column: 3 / end;
                grid-row: 7; 
                
                align-self: center;
                margin-top: 45px;
                font-size: 48px;
                color: #000000;
                text-align: left;
                line-height: 48px;
                z-index: 2;
                position: relative;
                &::before {
                    content:  attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.30);
                    top: -18px;
                    left: 0;
                    height: 21px;
                    overflow: hidden;
                }
                &::after {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.10);
                    top: -27px;
                    left: 0;
                    height: 12px;
                    overflow: hidden;
                }
            }
        }

        .item-3 {
            grid-column: 1 / 10;
            grid-row: 14 / 20; 	
            
            display: grid;
            grid-template-columns: repeat(9, 60px);
            grid-template-rows: repeat(6, 50px);
            
            .green-border-fill {
                background: #50E3C2;
                grid-column: 1 / 5;
                grid-row: 1; 
            }
            .title {
                font-family: "Roboto Black", serif;
                grid-column: 3 / end;
                grid-row: 1; 
                align-self: end;
                font-size: 48px;
                color: #000000;
                text-align: left;
                line-height: 48px;
                margin-left: 15px;
                z-index: 2;
                position: relative;
                &::before {
                    content:  attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.30);
                    top: -17px;
                    left: 0;
                    height: 22px;
                    overflow: hidden;
                }
                &::after {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.10);
                    top: -24px;
                    left: 0;
                    height: 13px;
                    overflow: hidden;
                }
            }
            .green-border {
                border: 20px solid #50E3C2;
                grid-column: 6 / end;
                grid-row: 3 / end; 
            }
            .content {
                grid-column: 1 / 8;
                grid-row: 2 / 6; 
                
                background: url("/images/level4/item-3.jpg") 50%;
                background-size: cover;
            }
            .subtitle {
                grid-column: 1 / end;
                grid-row: 6;
                margin-left: 25px;
                margin-top: -5px;
                font-family: "Roboto", serif;
                font-weight: bold;
                font-style: italic;
                font-size: 24px;
                color: #000000;
                text-align: left;
            }
            .number {
                grid-column: 9 / end;
                grid-row: 6;
                
                font-family: "Roboto Black", serif;
                font-size: 48px;
                color: #000000;
                text-align: center;
                line-height: 48px;
            }
        }

        .item-4 {
            grid-column: 12 / end;
            grid-row: 12 / 24; 	

            display: grid;
            grid-template-columns: repeat(5, 60px);
            grid-template-rows: repeat(12, 50px);
            
            .green-border {
                border: 20px solid #50E3C2;
                grid-column: 1 / 5;
                grid-row: 2 / 6; 
            }
            .subtitle {
                grid-column: 5;
                grid-row: 1 / end;
                
                font-family: "Roboto", serif;
                font-weight: bold;
                font-style: italic;
                writing-mode: vertical-lr;
                font-size: 24px;
                color: #000000;
                text-align: left;
                margin-left: -17px;
            }
            .title {
                font-family: "Roboto Black", serif;
                grid-column: 1;
                grid-row: 4; 
                writing-mode: vertical-rl;
                direction: rtl;
                transform: rotate(180deg);
                justify-self: end;
                font-size: 48px;
                color: #000000;
                text-align: left;
                line-height: 48px;
                z-index: 2;
                position: relative;
                &::before {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.30);
                    left: 44px;
                    height: auto;
                    width: 20px;
                    overflow: hidden;
                }
                &::after {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.10);
                    overflow: hidden;
                    height: auto;
                    width: 13px;
                    bottom: 0;
                    left: 60px;
                }
            }
            .content {
                grid-column: 2 / end;
                grid-row: 4 / 12; 
                
                background: url("/images/level4/item-4.jpg") 50%;
                background-size: cover;
            }
            .number {
                grid-column: 1;
                grid-row: 11;
                
                font-family: "Roboto Black", serif;
                font-size: 48px;
                color: #000000;
                text-align: center;
                line-height: 48px;
            }
            .green-pattern {
                grid-column: 2 / end;
                grid-row: 11 / end;
                background-image: url("/images/level4/green-pattern.svg");
            }
        }

        .item-5 {
            grid-column: 1 / 12;
            grid-row: 22 / 28; 
           
            display: grid;
            grid-template-columns: repeat(10, 60px);
            grid-template-rows: repeat(6, 50px);
            
            .content {
                grid-column: 5 / 9;
                grid-row: 2 / 6; 
                
                transform:scaleX(-1);
                background: url("/images/level4/item-5.jpg") 50%;
                background-size: cover;
            }
            .green-pattern {
                z-index: 2;
                grid-column: 2 / 6;
                grid-row: 1 / 3;
                background-image: url("/images/level4/green-pattern.svg");
            }
            .subtitle {
                grid-column: 9 / end;
                grid-row: 2;
                
                margin-top: -5px;
                font-family: "Roboto",serif;
                font-weight: bold;
                font-style: italic;
                font-size: 24px;
                color: #000000;
                text-align: left;
            }
            .title {
                font-family: "Roboto Black",serif;
                grid-column: 1 / end;
                grid-row: 3;
                font-size: 48px;
                color: #000000;
                text-align: left;
                line-height: 48px;
                z-index: 2;
                position: relative;
                align-self: end;
                &::before {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.30);
                    top: -15px;
                    left: 0;
                    height: 22px;
                    overflow: hidden;
                }
                &::after {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.10);
                    top: -22px;
                    left: 0;
                    height: 13px;
                    overflow: hidden;
                }
            }
            .green-border {
                border: 20px solid #50E3C2;
                grid-column: 3 / 7;
                grid-row: 5 / 7; 
            }
            .number {
                grid-column: 3;
                grid-row: 5;
                
                font-family: "Roboto Black", serif;
                font-size: 48px;
                color: #000000;
                text-align: center;
                line-height: 48px;
            }
        }

        .item-6 {
            grid-column: 9 / end;
            grid-row: 26 / 36; 
            
            display: grid;
            grid-template-columns: repeat(8, 60px);
            grid-template-rows: repeat(10, 50px);
            
            .title {
                font-family: "Roboto Black",serif;
                grid-column: 3 / end;
                grid-row: 1;
                font-size: 48px;
                color: #000000;
                text-align: left;
                line-height: 48px;
                z-index: 2;
                position: relative;
                align-self: end;
                &::before {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.30);
                    top: -15px;
                    left: 0;
                    height: 22px;
                    overflow: hidden;
                }
                &::after {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.10);
                    top: -22px;
                    left: 0;
                    height: 13px;
                    overflow: hidden;
                }
            }
            .content {
                z-index: 2;
                grid-column: 2 / end;
                grid-row: 2 / 10; 
                
                background: url("/images/level4/item-6.jpg") 50%;
                background-size: cover;
            }
            .number {
                grid-column: 1;
                grid-row: 5;
                
                font-family: "Roboto Black", serif;
                font-size: 48px;
                color: #000000;
                text-align: center;
                line-height: 48px;
            }
            .green-border-fill {
                background: #50E3C2;
                grid-column: 1;
                grid-row: 6 / 10; 
            }
            .green-border {
                border: 20px solid #50E3C2;
                grid-column: 2 / end;
                grid-row: 5 / end; 
            }
            .subtitle {
                grid-column: 2 / end;
                grid-row: 10;
                
                font-family: "Roboto",serif;
                font-weight: bold;
                font-style: italic;
                font-size: 24px;
                color: #000000;
                text-align: center;
            }
        }

        .item-7 {
            grid-column: 1 / 7;
            grid-row: 30 / end; 
            
            display: grid;
            grid-template-columns: repeat(6, 60px);
            grid-template-rows: repeat(9, 50px);
            
            .green-border {
                border: 20px solid #50E3C2;
                grid-column: 2 / 6;
                grid-row: 1 / 7; 
            }
            .subtitle {
                grid-column: 1 / end;
                grid-row: 1;
                
                font-family: "Roboto",serif;
                font-weight: bold;
                font-style: italic;
                font-size: 24px;
                color: #000000;
                text-align: left;
                align-self: flex-end;
            }
            .content {
                grid-column: 1 / 5;
                grid-row: 2 / end; 
                
                background: url("/images/level4/item-7.jpg") 50%;
                background-size: cover;
            }
            .title {
                font-family: "Roboto Black", serif;
                grid-column: 5;
                grid-row: 2 / end; 
                writing-mode: vertical-rl;
                justify-self: flex-start;
                font-size: 48px;
                color: #000000;
                text-align: left;
                line-height: 48px;
                z-index: 2;
                position: relative;
                &::before {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.30);
                    left: 41px;
                    height: auto;
                    width: 24px;
                    overflow: hidden;
                }
                &::after {
                    content: attr(text);
                    position: absolute;
                    color: rgba(0,0,0,0.10);
                    overflow: hidden;
                    height: auto;
                    width: 14px;
                    top: 0;
                    left: 59px;
                }
            }
            .green-border-fill {
                background: #50E3C2;
                grid-column: 5 / end;
                grid-row: 6 / end; 
            }
            .number {
                grid-column: 6;
                grid-row: 9;
                
                font-family: "Roboto Black", serif;
                font-size: 48px;
                color: #000000;
                text-align: center;
                line-height: 48px;
            }
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