import styled from 'styled-components';
import {BLACK, GREEN, WHITE} from "../color_consts";

export const Style = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 20px auto 0;

    .title {
        width: 180px;
        height: 44px;
        background: ${BLACK};
        font-family: Roboto-Bold, serif;
        font-size: 24px;
        color: ${WHITE};
        text-align: center;
        line-height: 44px;
    }
    .chapter-content-wrap {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        background: ${WHITE};
        border: 4px solid ${BLACK};
        .each-chapter {
            padding: 13px 24px;
            display: flex;
            & > div {
                font-family: "Roboto-Bold", serif;
                font-size: 16px;
                color: ${BLACK};
                line-height: 24px;
                font-weight: bold;
            }
            .new-chapter {
                width: 55px;
                height: 18px;
                font-family: 'Roboto-Bold',serif;
                font-size: 14px;
                background: ${GREEN};
                line-height: 18px;
                font-weight: bold;
                text-align: center;
                margin-top: 5px;
                margin-left: 10px;
            }
        }
        .each-chapter:nth-child(1) {
            padding-top: 20px;
            padding-bottom: 0;
        }
    }
`;