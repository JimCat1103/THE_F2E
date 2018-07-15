import styled from 'styled-components';
import {BLACK} from "../color_consts";

export const Style = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    
    .title {
        font-family: Roboto-Light, serif;
        font-size: 48px;
        color: ${BLACK};
        text-align: center;
        line-height: 48px;
    }
    .subtitle {
        font-family: Roboto-Light, serif;
        font-size: 24px;
        color: ${BLACK};
        text-align: center;
        line-height: 24px;
    }
    
    @media screen and (max-width: 767px) {
        padding: 0 15px;
        .subtitle {
            margin-top: 5px;
        }
    }
`;