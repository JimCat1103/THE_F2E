import styled from 'styled-components';

export function clearFix() {
    return `
    *zoom: 1;
    &::after {
      display: table;
      content:  "";
      clear: both;
    }
  `;
}

export const Style = styled.div`
    --redColor: #D0021B;
    --greenColor: #7ED321;
    --blueColor: #4A90E2;
    --grayColor: #9B9B9B;
    --whiteColor: #ffffff;
    --blackColor: #000000;

    .green {
        color: var(--greenColor);
    }
    .red {
        color: var(--redColor);
    }
    .blue {
        color: var(--blueColor);
    }

    background: #F2F2F2;
    
    .info {
        padding: 20px 30px 0;
        display: flex;
        
        .left {
            flex: 1;
            font-family: "HelveticaNeue-Bold", serif;
            font-size: 24px;
            color: var(--blackColor);
            font-weight: bold;
        }
        .right {
            width: auto;
            display: flex;
            padding-top: 8px;
            & > * {
                font-family: "HelveticaNeue-Medium", serif;
                font-size: 16px;
                color: var(--grayColor);
                text-align: right;
            }
            .dates {
                & > * {
                    padding-right: 10px;
                }
            }
            .week {
                position: relative;
                & > :nth-child(1) {
                    padding-right: 10px;
                }
            }
            .week:hover {
                cursor: pointer;
            }
            
            .week-select {
                opacity: 0;
                position: absolute;
                width: 125px;
                height: auto;
                right: 0;
                background: #ffffff;
                
                & > div {
                    font-family: "HelveticaNeue", serif;
                    font-size: 16px;
                    height: 34px;
                    line-height: 34px;
                    color: var(--blackColor);
                    text-align: center;
                }
                & > div:hover {
                    background: var(--blackColor);
                    color: var(--whiteColor);
                }
            }
            .week-open {
                opacity: 1;
            }
        }
    }
    
    .financial-info {
        margin-top: 16px;
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        height: 138px;
        & > div {
            width: 30%;
            height: 100%;
            background: var(--whiteColor);
            
            .title {
                font-family: "HelveticaNeue-Medium", serif;
                font-size: 16px;
                color: var(--blackColor);
                text-align: center;
                padding-top: 24px;
                padding-bottom: 13px;
            }
            .cost {
                font-family: "HelveticaNeue-Bold", serif;
                font-size: 36px;
                font-weight: bold;
                text-align: center;
            }
        }
        & > div ~ div {
            margin-left: 5%;
        }
    }
    
    @media screen and (max-width: 341px) {
        .info {
            display: block;
        }
    }
    
    @media screen and (max-width: 767px) {
        .info {
            padding: 20px 15px 0;
        }
        
        .financial-info {
            display: block;
            & > div {
                width: 100%;
            }
            & > div ~ div {
                margin-left: 0;
                margin-top: 16px;
            }
        }
    }
`;