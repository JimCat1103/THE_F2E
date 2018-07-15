import styled from 'styled-components';

export const Style = styled.div`
    margin-top: 30px;
        
    .text-title {
        font-family: Roboto-Regular, serif;
        font-size: 20px;
        color: #000000;
        letter-spacing: 0;
        text-align: left;
    }
    .input-wrap {
        width: 100%;
        height: 52px;
        background: #FFFFFF;
        position: relative;
        input {
            width: 100%;
            height: 100%;
            outline:none; 
            font-size: 20px;
            border: 2px solid #000000;
            border-radius: 8px;
            padding-left: 2rem;
            padding-right: 5rem;
        }
        input:focus {
            border: 2px solid #000000;
            border-radius: 8px;
        }
        input::placeholder {
            font-family: Roboto-Regular, serif;
            font-size: 20px;
            color: #999999;
            letter-spacing: 0;
            text-align: left;
            line-height: 20px;
        }
        
        & >svg {
            position: absolute;
            right: 2rem;
            top: 14px;
            font-size: 24px;
            color: #F5A623;
        }
    }
    .error-wrap {
        margin-top: 15px;
        & > div:nth-child(1) {
            width: 100%;
            height: 26px;
            background: #F5A623;
            border-radius: 4px;
            color: #fff;
            
            font-family: 'Roboto-Regular', serif;
            font-size: 14px;
            letter-spacing: 0;
            text-align: center;
            line-height: 26px;
            
            position: relative;
        }
        & > div:nth-child(1):after, > div:nth-child(1):before {
            bottom: 100%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
        }
        
        & > div:nth-child(1):after {
            border-bottom-color: #F5A623;
            border-width: 10px;
            margin-left: -10px;
        }
        & > div:nth-child(1):before {
            //border-color: rgba(194, 225, 245, 0);
            //border-bottom-color: #c2e1f5;
            //border-width: 15px;
            //margin-left: -15px;
        }
    }
`;