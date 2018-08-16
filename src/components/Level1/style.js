import styled from 'styled-components';

export const Style = styled.div`
    margin: 0 auto;
    padding: 0 115px;
    height: 100%;
    background-color: #E1E1E1;
    .tab-wrap {
        width: 100%;
        margin: 0 auto;
    }
    .tab-top {
        display: flex;
        margin: 0;
        padding: 0;
        width: auto;
        & > li {
            width: 33.3%;
            background: #4A90E2;
            list-style: none;
            height: 76px;
            
            font-family: Roboto-Medium;
            font-size: 24px;
            color: #FFFFFF;
            text-align: center;
            line-height: 76px;
            cursor: pointer;
        }
    }
`;