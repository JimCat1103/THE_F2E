import styled from 'styled-components';

export const Style = styled.div`
    margin: 20px auto 0;
    background: #F2F2F2;
    border: 2px solid #C8C8C8;
    border-radius: 5px;
    height: 519px;
    position: relative;
    .title {
        height: 76px;
        background: #F2F2F2;
        border-radius: 5px 5px 0 0;
        border-bottom: 2px solid #C8C8C8;
        display: flex;
        
        & > div {
            margin-left: 30px;
        }
        
        .done-checkbox {
            height: 100%;
            line-height: 76px;
        }
        
        .title-input {
            height: 100%;
            line-height: 76px;
            padding-top: 6px;
            flex: 1;
            input {
                font-size: 28px;
                line-height: 28px;
                text-decoration: line-through;
                border: 0;
                background: #F2F2F2;
                color: black;
            }
            input:focus {
                outline: none;
            }
            input::placeholder {
                color: black;
            }
        }
        
        .my-favorite {
            width: auto;
            height: 100%;
            line-height: 76px;
            font-size: 28px;
            & > svg {
                stroke: black;
                color: #F2F2F2;
                stroke-width: 46px;
            }
        }
        .edit-btn {
            width: auto;
            height: 100%;
            margin-right: 30px;
            line-height: 76px;
            font-size: 28px;
            & > svg {
                color: #4A90E2;
            }
        }
    }
    
    //span {
    //    font-family: "Roboto-Regular", serif;
    //    font-size: 24px;
    //    color: #C8C8C8;
    //    text-align: left;
    //    line-height: 65px;
    //}
    
    .content {
        padding-left: 70px;
        padding-right: 70px;
        .date-and-time {
            margin-top: 20px;
            & > div:nth-child(1) {
                margin-bottom: 5px;
                display: flex;
                
                & > div:nth-child(1) {
                    font-size: 20px;
                    color: #000000;
                }
                & > div:nth-child(2) {
                    font-family: "Roboto-Medium", serif;
                    font-size: 20px;
                    color: #000000;
                    margin-left: 5px;
                }
            }
            .picker {
                display: flex;
                border-radius: 2px;
                margin-bottom: 20px;
                margin-left: 25px;
                & > div:nth-child(2) {
                    margin-left: 10px;
                }
                .date, .time {
                    .date-picker-wrap {
                        cursor: pointer;
                        height: 35px;
                        border: 0;
                        outline: none;
                        font-family: Roboto-Regular, serif;
                        font-size: 16px;
                        color: #C8C8C8;
                        padding-left: 2rem;
                    }
                    .date-picker-popper {
                        
                    }
                }
                .time {
                    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
                        padding: 0 !important;
                    }
                }
            }
        }
        
        
        .upload-file {
            margin-top: 20px;
            .upload-file-title {
                margin-bottom: 5px;
                display: flex;
                
                & > div:nth-child(1) {
                    font-size: 20px;
                    color: #000000;
                }
                & > div:nth-child(2) {
                    font-family: "Roboto-Medium", serif;
                    font-size: 20px;
                    color: #000000;
                    margin-left: 5px;
                }
            }
            & > section {
                .dropzone {
                    width: 30px;
                    height: 30px;
                    background: #C8C8C8;
                    border-radius: 2px;
                    
                    .dropzone-wrap {
                        width: 100%;
                        height: 100%;
                        margin-bottom: 20px;
                        position: relative;
                        cursor: pointer;
                    }
                    .dropzone-wrap:before, .dropzone-wrap:after {
                        position: absolute;
                        content: '';
                        width: 80%;
                        border-bottom: solid 2px #fff;
                        top: 50%;
                        z-index: 1;
                        left: 10%;
                    }
                    .dropzone-wrap:after {
                        transform: rotate(90deg);
                    }
                }
            }
            
        }
        .dropzone-file-wrap {
            display: flex;
            margin-bottom: 20px;
        }
        
        .edit-content {
            margin-bottom: 20px;
            .edit-content-title {
                margin-bottom: 5px;
                display: flex;
                
                & > div:nth-child(1) {
                    font-size: 20px;
                    color: #000000;
                }
                & > div:nth-child(2) {
                    font-family: "Roboto-Medium", serif;
                    font-size: 20px;
                    color: #000000;
                    margin-left: 5px;
                }
            }
            & > div:nth-child(2) {

                height: 120px;
                background: #FFFFFF;
                border-radius: 2px;
                
                textarea {
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 15px;
                    font-family: "Roboto-Regular", serif;
                    font-size: 16px;
                    color: #000000;
                    line-height: 24px;
                    resize: none;
                    border: none;
                    border-radius: 0;
                    outline: 0;
                    appearance: none;
                }
                textarea::placeholder {
                    font-family: "Roboto-Regular", serif;
                    font-size: 16px;
                    color: #C8C8C8;
                    line-height: 24px;
                    letter-spacing: 1.3px;
                    text-align: left;
                }
                textarea:focus {
                    outline: none !important;
                    border: 0 !important;
                    border-radius: 0 !important;
                }
            }
        }
    }
    .edit-footer {
        width: 100%;
        height: 60px;
        position: absolute;
        bottom: 0;
        background: #F2F2F2;
        
        display: flex;
        
        & > div {
            width: 50%;
            flex: 1;
            
            display: flex;
            cursor: pointer;
            & > div {
                width: 100%;
                text-align: center;
                & > * {
                    font-family: Roboto-Regular;
                    font-size: 24px;
                    line-height: 60px;
                }
                & > svg {
                    margin-right: 10px;
                    padding-top: 3px;
                }
            }
        }
        & > div:nth-child(1) {
            color: #D0021B;
            background: #ffffff;
        }
        & > div:nth-child(2) {
            color: #ffffff;
            background: #4A90E2;
            
            & > div {
                & > svg {
                    transform: rotate(45deg);
                }
            }
        }
    }
`;