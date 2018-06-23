import styled from 'styled-components';

export const Style = styled.div`
    --contentColor: #9013FE;
    --borderColor: #9013FE;
    
    & > div:nth-child(1) {
        font-family: "Roboto-Italic", serif;
        font-size: 16px;
        color: #9013FE;
        padding-left: 10px;
        padding-right: 10px;
        letter-spacing: 1.5px;
        width: auto;
        height: 32px;
        line-height: 30px;
    }
    
    & > div:nth-child(2) {
        font-size: 16px;
        color: #9013FE;
        line-height: 30px;
        padding-right: 10px;
    }
    
    & > div:nth-child(2):hover {
        cursor: pointer;
    }
`;