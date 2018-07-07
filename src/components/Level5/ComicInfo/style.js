import styled from 'styled-components';
import {BLACK, WHITE} from "../color_consts";

export const Style = styled.div`
    --whiteColor: #FFFFFF;
    --blackColor: #000000;

    width: 100%;
    max-width: 960px;
    margin: 20px auto 0;
    
    display: flex;
    .image {
        width: 50%;
        background: ${WHITE};
        border: 4px solid ${BLACK};
        img {
            width: auto;
            height: auto;
            max-width: 100%;
        }
    }
    .content {
        flex: 1;
        .title {
            background: ${BLACK};
            height: 52px;
            font-family: Roboto-Bold, serif;
            font-size: 36px;
            color: ${WHITE};
            text-align: center;
        }
        .info-wrap {
            padding-top: 20px;
            padding-left: 20px;
            display: flex;
            & > div:nth-child(1) {
                width: auto;
                margin-right: 20px;
                & > div {
                    height: 24px;
                    font-family: "Roboto-Bold", serif;
                    font-weight: bold;
                    font-size: 16px;
                    color: ${BLACK};
                    line-height: 24px;
                    margin-bottom: 8px;
                }
                #title-rate {
                    padding-top: 7px;
                }
            }
            & > div:nth-child(2) {
                flex: 1;
                
                & > div {
                    font-family: Roboto-Regular, serif;
                    font-size: 16px;
                    color: ${BLACK};
                    line-height: 24px;
                    margin-bottom: 8px;
                    
                    display: flex;
                    & > div {
                        height: 100%;
                    }
                }
                .rating {
                    unicode-bidi: bidi-override;
                    direction: rtl;
                    padding-right: 192px;
                    padding-top: 7px;
                }
                .rating > span {
                    display: inline-block;
                    position: relative;
                    font-size: 36px;
                    width: 1.1em;
                }
                .rating > span:hover:before,
                .rating > span:hover ~ span:before {
                    content: "\\2605";
                    position: absolute;
                    cursor: pointer;
                }
            }
            margin-bottom: 20px;
        }
        .summary-wrap {
            padding-left: 20px;
            & > div:nth-child(1) {
                height: 24px;
                font-family: "Roboto-Bold", serif;
                font-weight: bold;
                font-size: 16px;
                color: ${BLACK};
                line-height: 24px;
                margin-bottom: 8px;
            }
            .summary-text {
                font-family: "Roboto-Regular", serif;
                font-size: 16px;
                color: ${BLACK};
                line-height: 24px;
                margin-bottom: 20px;
            }
        }
    }
    
    @media screen and (max-width: 767px) {
        display: block;
        max-width: 100%;
        .image {
            width: auto;
        }
        .content {
            .info-wrap {
                .each-info-txt {
                    .rating {
                        padding-right: 15px !important;
                    }
                }
            }
        }
    }
`;
