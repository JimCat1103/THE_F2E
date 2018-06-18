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
        
        & > div:nth-child(2) {
            height: 100%;
            .title-input {
                margin-top: 24px;
                height: 28px;
                input {
                    line-height: 28px;
                }
            }
        }
    }
    
    span {
        font-family: Roboto-Regular;
        font-size: 24px;
        color: #C8C8C8;
        text-align: left;
        line-height: 65px;
    }
    
    .content {
        padding-left: 70px;
        padding-right: 70px;
        .date-and-time {
            margin-top: 20px;
            & > div:nth-child(1) {
                font-family: Roboto-Medium;
                font-size: 20px;
                color: #000000;
                margin-bottom: 5px;
            }
            .picker {
                display: flex;
                border-radius: 2px;
                margin-bottom: 20px;
                & > div:nth-child(2) {
                    margin-left: 10px;
                }
                .date, .time {
                    .date-picker-wrap {
                        height: 35px;
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
            margin-bottom: 20px;
            & > div:nth-child(1) {
                font-family: Roboto-Medium;
                font-size: 20px;
                color: #000000;
                margin-bottom: 5px;
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
            & > div:nth-child(1) {
                font-family: Roboto-Medium;
                font-size: 20px;
                color: #000000;
                margin-bottom: 5px;
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
                    font-family: Roboto-Regular;
                    font-size: 16px;
                    color: #000000;
                    line-height: 24px;
                    resize: none;
                    border: none;
                    border-radius: 0;
                    outline: 0;
                    appearance: none;
                }
                textarea::-webkit-input-placeholder {
                    font-family: Roboto-Regular;
                    font-size: 16px;
                    color: #000000;
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
        background: #FFFFFF;
    }
`;