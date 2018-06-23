import styled from 'styled-components';

export const Style = styled.div`
    width: 100%;
    display: flex;
    background: #7828B4;
    .logo {
        background: #7828B4;
        margin-right: 5vw;
        & > div {
            font-family: "Optima-ExtraBlack", serif;
            font-size: 36px;
            color: #FFFFFF;
            line-height: 92px;
            padding-left: 60px;
        }
    }   
    .search-bar {
        background: #7828B4;
        flex: 1;
        & > div {
            height: 44px;
            padding-left: 30px;
            margin-top: 24px;
            .search-input {
                display: flex;
                padding-top: 12px;
                padding-bottom: 5px;
                max-width: 60%;
                border-bottom: 1px solid #FFFFFF;
                label {
                    display: block;
                    width: 20px;
                    height: 20px;
                    color: #ffffff;
                    margin-right: 10px;
                }
                input {
                    font-size: 20px;
                    color: #ffffff;
                    width: 100%;
                    border:none;
                    background: transparent none;
                    box-shadow: none;
                    outline: none; 
                    -webkit-appearance: none;
                }
                
                input:-moz-placeholder {
                    font-family: "Roboto-Italic", serif;
                    font-size: 20px;
                    color: rgba(255,255,255,0.50);
                }
                input::-moz-placeholder {
                    font-family: "Roboto-Italic", serif;
                    font-size: 20px;
                    color: rgba(255,255,255,0.50);
                }
                input:-ms-input-placeholder {
                    font-family: "Roboto-Italic", serif;
                    font-size: 20px;
                    color: rgba(255,255,255,0.50);
                }
                input::-webkit-input-placeholder {
                    font-family: "Roboto-Italic", serif;
                    font-size: 20px;
                    color: rgba(255,255,255,0.50);
                }
            }
            .search-icon {
                width: 20px;
                height: 20px;
            }
        }
    }
    
    @media screen and (max-width: 679px) {
        display: block;
        .logo {
            width: 100%;
            height: 69px;
            & > div {
                padding-left: 0;
                line-height: 69px;
                text-align: center;
            }
        }
        .search-bar {
            height: 55px;
            background: #EBEBEB;
            box-shadow: 0 5px 10px 0 #D7D7D7;
            & > div {
                margin: 0 auto;
                padding-left: 0;
                .search-input {
                    padding-top: 14px;
                    margin: 0 auto;
                    max-width: 80%;
                    border-bottom: 1px solid #000000;
                    
                    label {
                        color: #000000;
                    }
                    input {
                        color: #9B9B9B;
                    }
                    input:-moz-placeholder {
                        color: #9B9B9B;
                    }
                    input::-moz-placeholder {
                        color: #9B9B9B;
                    }
                    input:-ms-input-placeholder {
                        color: #9B9B9B;
                    }
                    input::-webkit-input-placeholder {
                        color: #9B9B9B;
                    }
                }
            }
        }
    }
`;