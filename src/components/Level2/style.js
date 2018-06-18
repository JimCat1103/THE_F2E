import styled from 'styled-components';

export const Style = styled.div`
    background: #F2F2F2;
    .content {
        display: flex;
    }
    
    @media screen and (max-width: 679px) {
        .content {
            display: block;
        }
    }
`;