import styled from 'styled-components';

export const Style = styled.ul`
    list-style: none;
    position: relative;
    padding: 0 20px 0 0;
    & > li {
        margin: 0 0 20px;
    }
    .content-item {
        display: flex;
        width: 100%;
        height: 220px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
        transition: all .3s;
        
        & > a {
            text-decoration: none;
            
            .content-img {
                flex: 0 0 auto;
                width: 220px;
                display: inline-block;
                overflow: hidden;
                .imgbox-inner {
                    position: relative;
                    width: 100%;
                    padding-top: 100%;
                    height: 0;
                    
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        max-height: 100%;
                    }
                }
            }
            
        }
        
        .content-info {
            flex: 1 1 auto;
            padding: 24px 20px;
            
            & > a {
                text-decoration: none;
                .subtitle {
                    color: #9013FE;
                    font-weight: 400;
                    letter-spacing: 1px;
                    font-size: 24px;
                    margin-bottom: 15px;
                }
                .content-des {
                    font-size: 16px;
                    position: relative;
                    height: 50px;
                    line-height: 24px;
                    color: #2f3542;
                    overflow: hidden;
                    transition: all .3s;
                }
                .content-des:before {
                    content: '...';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 32px;
                    height: 24px;
                    padding-left: 0px;
                    color: #2f3542;
                    background-color: #fff;
                    cursor: pointer;
                }
                
                .content-ticket {
                    display: flex;
                    padding: 16px 0;
                    & > h3 {
                        font-size: 16px;
                        color: #2f3542;
                        letter-spacing: 1px;
                        font-weight: 600;
                        margin: 0;
                    }
                    .content-tag {
                        margin-left: 20px;
                        padding: 3px 16px;
                        line-height: 19px;
                        border-radius: 100px;
                        background-color: #D7D7D7;
                        color: #fff;
                        font-weight: 300;
                    }
                }
                
                .other-info {
                    display: flex;         
                    flex-wrap: wrap;
                    & > div:nth-child(1) {
                        display: flex;
                        margin-right: 10px;
                        .location {
                            display: flex;
                            margin-right: 10px;
                            & > div:nth-child(1) {
                                font-size: 16px;
                                margin-right: 5px;
                                color: #000000;
                            }
                            & > div:nth-child(2) {
                                font-family: Roboto-Regular;
                                font-size: 16px;
                                color: #9B9B9B;
                            }
                        }
                        .ticket-info {
                            span {
                                font-family: Roboto-Regular;
                                font-size: 16px;
                                color: #9B9B9B;
                            }
                            & > span:nth-child(1) {
                                color: #000000;
                                font-weight: bold;
                                margin-right: 5px;
                            }
                        }
                    }
                    
                    & > div:nth-child(2) {
                        display: flex;
                        margin-right: 10px;
                        & > div:nth-child(1) {
                            color: #000000;
                            font-size: 16px;
                            margin-right: 5px;
                        }
                        & > div:nth-child(2) {
                            font-family: Roboto-Regular;
                            font-size: 16px;
                            color: #9B9B9B;
                        }
                    }
                }
            }
        }
        
        .content-info:before {
            content: '';
            display: table;
        }
        .content-info:after {
            content: '';
            display: table;
        }
    }
    nav {
      .pagination {
          float: right;
          margin-bottom: 20px;
          
          & > li {
            a {
                color: #000000;
            }
            a:hover {
                background: #9013FE;
                color: #ffffff;
            }
          }
      }
    }
    @media (max-width: 1024px) {
        .content-item {
            flex-direction: column;
            height: 440px;
            & > a {
                .content-img {
                    width: 100%;
                    .imgbox-inner {
                        padding-top: 200px;
                        
                        img {
                            max-height: initial;
                            max-width: 100%;
                        }
                    }
                }
            }
        }
                
    }

`;