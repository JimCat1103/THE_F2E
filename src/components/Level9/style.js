import styled from 'styled-components';

export const Style = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(90deg, #250060 0%, #000 50%, #250060 100%);
    display: flex;
    justify-content: space-between;
    padding: 40px 20px;
    & > div {
        width: 33.33%;
        min-width: 33.33%;
        flex: 1;
        height: auto;
    }
    & > div:nth-child(1) {
        .title {
            font-size: 48px;
            line-height: 1.2;
            color: #FF0093;
            font-style: italic;
            font-weight: bold;
        }
        .subtitle {
            margin: 25px auto 0;
            span {
                background: #8000FF;
                font-size: 16px;
                padding: 10px;
                color: #250060;
            }
        }
        .current-level {
            margin-top: 20px;
            span {
                font-size: 36px;
                color: #ffffff;
                font-weight: bold;
                border-bottom: solid 4px #8000FF;
                padding-bottom: 3px;
            }
        }
        .level-ship {
            width: 100%;
            height: auto;
            margin-top: 20px;
            & > div {
                padding-left: 40px;
                img {
                    width: auto;
                    height: auto;
                    max-width: 100%;
                    max-height: 100%;
                }
            }  
        }
        .level-desc {
            width: 100%;
            height: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            position: relative;
            svg {
                fill: #FF0093;
            }
            .desc-text {
                position: absolute;
                top: 0;
                padding-top: 50px;
                padding-left: 20px;
                padding-right: 20px;
                
                font-size: 16px;
                color: white;
            }
        }
    }
    & > div:nth-child(2) {
        .progress-wrap {
            display: flex;
            .progress-icon {
                width: 30%;
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 48px;
                    height: calc(100% - 90px);
                    bottom: 4px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #35006A;  
                    opacity: 0.7;  
                }
                &:after {
                    opacity: 0.7;
                    content: '';
                    position: absolute;
                    bottom: -16px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 20px 35px 0 35px;
                    border-color: #35006a transparent transparent transparent;
                }
                img {
                    width: auto;
                    height: auto;
                    max-width: 100%;
                    max-height: 100%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .progress-list {
                flex: 1;
                padding: 10px;
                border: solid 1px green;
                
                .list {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    li {
                        width: calc(33.333% - 10px);
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        list-style: none;
                        margin: 5px;
                        padding: 0;
                        min-height: 60px;
                        min-width: 60px;
                        
                        .skill-icon {
                            border: 2px solid #FF0093;
                            //background-color: #6900D1;
                            background-color: rgba(255, 255, 255, 0.3);
                            color: #ffffff;
                            width: 60px;
                            height: 60px;
                            font-size: 40px;
                            margin: 0 auto;
                            & > i, svg {
                                font-size: 40px;
                                line-height: 60px;
                            }
                        }
                        
                        .recommended, .optional {
                            & > * {
                                color: #ffffff;
                                font-size: 13px;
                            }
                            & > i {
                                line-height: 13px;
                            }
                        }
                        .recommended {
                            margin-top: 5px;
                        }
                    }
                }
            }
            
        }
        .css-progress, .javascript-progress {
            margin-top: 20px;
            .progress-list {
                .list {
                    flex-wrap: wrap;
                }
            }
        }
    }
`;