import styled from 'styled-components';
import {BLUE} from "./color_consts";

export const Style = styled.div`
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    
    .top-blue-line {
        width: 100%;
        height: 8px;
        background: ${BLUE};
    }
    
    .steps-step {
        max-width: 80%;
        margin: 50px auto auto;
    }
    
    .steps-container {
        margin-top: 60px;
        
        .steps-action {
            margin-top: 30px;
            padding-bottom: 50px;

        }
    }
    
    @media screen and (max-width: 767px) {
        .steps-step {
            & > div {
                display: flex !important;
            }
        }
        .steps-container {
            margin-top: 20px;
        }
        .steps-action {
            padding: 0 15px;
        }
    }
`;