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
    background: #F2F2F2;
    
    .info {
        padding: 20px 30px 0;
        display: flex;
        
        .left {
            flex: 1;
            font-family: "HelveticaNeue-Bold", serif;
            font-size: 24px;
            color: #000000;
            font-weight: bold;
        }
        .right {
            width: auto;
            display: flex;
            padding-top: 8px;
            & > * {
                font-family: "HelveticaNeue-Medium", serif;
                font-size: 16px;
                color: #9B9B9B;
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
                    color: #000000;
                    text-align: center;
                }
                & > div:hover {
                    background: #000000;
                    color: #ffffff;
                }
            }
            .week-open {
                opacity: 1;
            }
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
    }
`;