import styled from 'styled-components';

export const Style = styled.div`
    .filter-container {
        width: 80%;
        height: auto;
        margin: 0 auto;
        background: #EBEBEB;
        
        .filter-wrap {
            padding-left: 38px;
            padding-right: 38px; 
            margin-bottom: 20px;
            & > div:nth-child(1) {
                padding-top: 24px;
                font-size: 20px;
                color: #000000;
                margin-bottom: 14px;
            } 
            
            .location-wrap {
                & > select {
                    height: 40px;
                    font-size: 20px;
                    color: #000000;
                }
            }
            
            .date-wrap {
                display: flex;
                margin-bottom: 8px;
                
                & > div:nth-child(1) {
                    min-width: 35px;
                    text-align: right;
                    padding-right: 5px;
                    margin-right: 5px;
                }
                
                & > div {
                    height: 40px;
                    font-size: 16px;
                    color: #000000;
                    line-height: 40px;
                }
                   
                .date-picker-wrap {
                    width: 100%;
                    height: 40px;
                    font-size: 16px;
                    color: #000000;
                    padding-left: 5px;
                }
            }
            
            .categories-wrap {
                display: flex;
                flex-direction: column;
                
                & > label {
                    margin-bottom: 0;
                }
            }
            
            
            
            
        }
        
        .border-line {
            border: 1px solid #D7D7D7;
            background: #D7D7D7;
        }
        
    }
    
    @media screen and (max-width: 679px) {
        .filter-container {
            width: 100%;
        }
    }
    
    @media screen and (max-width: 767px) {
        .filter-container {
            margin-left: 0;
        }
    }
`;