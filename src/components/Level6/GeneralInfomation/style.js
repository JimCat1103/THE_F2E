import styled from 'styled-components';
import {BLACK} from "../color_consts";

export const birth_styles = {
    fontFamily: "Roboto-Regular, serif",
    color: "#000000",
    letterSpacing: "0",
    textAlign: "left",

    width: "100%",
height: "100%",
outline: "none",
fontSize: "40px !important",
border: "2px solid #000000",
borderRadius: "8px",
paddingLeft: "2rem",
paddingRight: "5rem"
};

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
    .name-and-phone {
        display: flex;
        
        & > div {
            width: 50%;
        }
        & > div:nth-child(1) {
            margin-right: 10px;
        }
        & > div:nth-child(2) {
            margin-left: 10px;
        }
    }
    .birthday-picker {
        margin-top: 24px;
        .title {
            font-family: Roboto-Regular, serif;
            font-size: 20px;
            color: #000000;
            letter-spacing: 0;
            text-align: left;
        }
        .content {
            display: flex;
            & > div {
                margin: 0 auto;
                width: 30%;
                border: 2px solid #000000;
                border-radius: 8px;
                .each-birthday-select {
                    & > div {
                        background: #FFFFFF;
                        border-color: #000000 !important;
                        box-shadow: none !important;
                    }
                    & > div:hover {
                        cursor: pointer;
                        * {
                            cursor: pointer;
                        }
                    }
                }
                * {
                    font-family: Roboto-Regular, serif;
                    font-size: 20px !important;
                    color: #000000;
                    letter-spacing: 0;
                    text-align: left;
                    outline:none; 
                }
            }
            & > div + div {
                margin-left: 5px;
            }
        }
    }
    
    
    @media screen and (max-width: 767px) {
        padding: 0 15px;
        .subtitle {
            margin-top: 5px;
        }
        .name-and-phone {
            display: block;
            & > div {
                width: 100%;
                margin: 0 auto;
            }
            & > div:nth-child(2) {
                margin: 0 auto;
            }
        }
        .birthday-picker {
            .content {
                display: block;
                & > div {
                    width: 100%;
                    margin: 0 auto;
                }
                & > div + div {
                    margin: 10px auto 0;
                }
            }
        }
    }
`;