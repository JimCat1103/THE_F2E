import styled from 'styled-components';

export const Style = styled.div`
    margin: 0 auto;
    padding: 0 115px;
    border: solid 1px blue;
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
        }
    }
`;