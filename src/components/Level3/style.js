import styled from 'styled-components';

export const Style = styled.div`
    --redColor: #D0021B;
    --greenColor: #7ED321;
    --blueColor: #4A90E2;
    --grayColor: #9B9B9B;
    --whiteColor: #ffffff;
    --blackColor: #000000;

    .green {
        color: var(--greenColor);
    }
    .red {
        color: var(--redColor);
    }
    .blue {
        color: var(--blueColor);
    }

    background: #F2F2F2;
    
    .info {
        padding: 20px 30px 0;
        display: flex;
        
        .left {
            flex: 1;
            font-family: "HelveticaNeue-Bold", serif;
            font-size: 24px;
            color: var(--blackColor);
            font-weight: bold;
        }
        .right {
            width: auto;
            display: flex;
            padding-top: 8px;
            & > * {
                font-family: "HelveticaNeue-Medium", serif;
                font-size: 16px;
                color: var(--grayColor);
                text-align: right;
            }
            .dates {
                & > * {
                    padding-right: 10px;
                }
            }
            .week {
                position: relative;
                & > :nth-child(1) {
                    padding-right: 10px;
                }
            }
            .week:hover {
                cursor: pointer;
            }
            
            .week-select {
                opacity: 0;
                position: absolute;
                width: 125px;
                height: auto;
                right: 0;
                background: #ffffff;
                
                & > div {
                    font-family: "HelveticaNeue", serif;
                    font-size: 16px;
                    height: 34px;
                    line-height: 34px;
                    color: var(--blackColor);
                    text-align: center;
                }
                & > div:hover {
                    background: var(--blackColor);
                    color: var(--whiteColor);
                }
            }
            .week-open {
                opacity: 1;
            }
        }
    }
    
    .financial-info {
        margin-top: 16px;
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        height: 138px;
        & > div {
            width: 30%;
            height: 100%;
            background: var(--whiteColor);
            
            .title {
                font-family: "HelveticaNeue-Medium", serif;
                font-size: 16px;
                color: var(--blackColor);
                text-align: center;
                padding-top: 24px;
                padding-bottom: 13px;
            }
            .cost {
                font-family: "HelveticaNeue-Bold", serif;
                font-size: 36px;
                font-weight: bold;
                text-align: center;
            }
        }
        & > div ~ div {
            margin-left: 5%;
        }
    }
    
    .charts {
        padding: 0 30px;
        margin-top: 15px;
        
        .xAxis-styles {
            > text {
                font-size: 16px !important;
                font-family: "HelveticaNeue-Medium", serif !important;
                fill: var(--grayColor) !important;
            }
        }
    }
    
    .table-list {
        padding: 0 30px;
        margin-top: 16px;
        margin-bottom: 34px;
        display: flex;
        height: auto;
        & > div ~ div {
            margin-left: 20px;
        }
        
        & > div {
            width: 50%;
            background: var(--whiteColor);
        }
        
        .left {
            .title {
                padding-top: 24px;
                padding-left: 30px;
                font-family: "HelveticaNeue-Bold", serif;
                font-size: 24px;
                font-weight: bold;
                color: #000000;
            }
            
            .content {
                margin-top: 15px;
                padding: 0 30px 15px;
                .wrap {
                    display: flex;
                    flex-wrap: wrap;
                    
                    & > div {
                        line-height: 75px;
                        display: flex;
                        
                        .icon {
                            font-size: 45px;
                            margin-right: 20px;
                        }
                        .name {
                            flex: 1;
                            font-family: "HelveticaNeue-Medium", serif;
                            font-size: 16px;
                            color: var(--grayColor);
                        }
                        .cost {
                            margin-right: 20px;
                            font-family: "HelveticaNeue-Medium", serif;
                            font-size: 20px;
                            color: var(--blackColor);
                        }
                        .arrow-icon {
                            font-size: 20px;
                            margin-right: 8px;
                        }
                        .arrow-number {
                            font-family: "HelveticaNeue-Medium", serif;
                            font-size: 16px;
                            font-weight: bold;
                        }
                    }
                    & > div:nth-child(1) {
                        flex: 1;
                    }     
                }
                .wrap ~ div {
                    border-top: solid 3px #EBEBEB;
                }
            }
        }
        .right {
            .title {
                padding-top: 24px;
                padding-left: 30px;
                font-family: "HelveticaNeue-Bold", serif;
                font-size: 24px;
                font-weight: bold;
                color: var(--blackColor);
            }
            
            .content {
                margin-top: 15px;
                padding: 0 30px 15px;
                
                & > div ~ div {
                    margin-top: 25px;
                }
                
                .wrap {
                    display: flex;
                    flex-wrap: wrap;
                    & > div:nth-child(1) {
                        flex: 1;
                        display: flex;
                        
                        .image {
                            width: 90px;
                            height: 80px;
                            img {
                                width: 100%;
                                max-width: 100%;
                                max-height: 100%;
                            }
                        }
                        .info {
                            display: flex;
                            flex-direction: column;
                            max-height: 80px;
                            padding: 0 0 0 20px;
                            & > div {
                                height: 30%;
                            }
                            & > div ~ div {
                                margin-top: 5%;
                            }
                            .name {
                                font-family: "HelveticaNeue-Bold", serif;
                                font-size: 20px;
                                font-weight: bold;
                                line-height: 20px;
                                color: var(--blackColor);
                            }
                            .date {
                                font-family: "HelveticaNeue", serif;
                                font-size: 16px;
                                line-height: 20px;
                                color: var(--grayColor);
                                
                                & > span {
                                    padding-left: 5px;
                                }
                            }
                            .user {
                                font-family: "HelveticaNeue", serif;
                                font-size: 16px;
                                line-height: 20px;
                                color: var(--grayColor);
                                
                                & > span {
                                    padding-left: 5px;
                                }
                            }
                        }
                    }     
                    
                    .cost {
                        padding-top: 25px;
                        
                        & > div:nth-child(1) {
                            font-family: "HelveticaNeue", serif;
                            font-size: 14px;
                            color: var(--blackColor);
                            text-align: right;
                        }
                        
                        & > div:nth-child(2) {
                            font-family: "HelveticaNeue-Bold", serif;
                            font-size: 20px;
                            color: var(--blackColor);
                            text-align: right;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
    
    @media screen and (max-width: 767px) {
        .info {
            padding: 20px 15px 0;
        }
        
        .financial-info {
            display: block;
            & > div {
                width: 100%;
            }
            & > div ~ div {
                margin-left: 0;
                margin-top: 16px;
            }
        }
        
        .table-list {
            display: block;
            
            & > div {
                width: 100%;
            }
            
            .right {
                margin-left: 0;
                margin-top: 20px;
            }
        }
    }
    
    @media screen and (max-width: 419px) {
        .table-list {
            .content {
                .wrap {
                    display: block !important;
                   
                    .cost {
                        display: flex;
                        padding-top: 0 !important;
                        & > div:nth-child(1) {
                            margin-right: 10px;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }
    
    @media screen and (max-width: 341px) {
        .table-list {
            .content {
                .wrap {
                    display: block !important;
                    
                    & > div:nth-child(1) {
                        .info {
                            & > div {
                                height: auto !important;
                            }
                            & > div ~ div {
                                line-height: 0 !important;
                                margin-top: 5px !important;
                            }    
                        }
                    }
                }
            }
        }
    }
`;