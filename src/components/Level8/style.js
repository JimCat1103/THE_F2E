import styled from 'styled-components';

const center = () => `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const starTop = () => `
    width: 280px;
    border-top: 280px solid #FF3C82;
    border-left: 155px solid transparent;
    border-right: 155px solid transparent;
`;

export const Style = styled.div`
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    background: #1469FF;
    
    .hide {
        display: none !important;
    }
    .opacityZero {
        opacity: 0 !important;
    }
    
    .opening {
        background: #1469FF;
        .star {
            ${center()};
            z-index: 3;
            .star-top {
                ${starTop};
                position: absolute;
                top: 25px;
            }
            .star-bottom {
                ${starTop};
                position: relative;
                transform: rotate(180deg);
                bottom: 25px;
            }
        }
        .circle {
            ${center()};
            z-index: 2;
            height: 500px;
            width: 500px;
            background-color: #0027C8;
            border-radius: 50%;
        }
        .square {
            ${center()};
            z-index: 1;
            width: 400px;
            height: 400px;
            background: #000;
        }
        .text-block {
            ${center()};
            z-index: 4;
            text-align: center;
            .title {
                font-family: Roboto-Bold, serif;
                font-size: 64px;
                color: #FFFFFF;
                white-space: nowrap;
                line-height: 64px;
            }
            .description {
                font-family: Roboto-Regular, serif;
                font-size: 24px;
                color: #FFFFFF;
                line-height: 36px;
                white-space: nowrap;
            }
        }
    }
    
    .question-1-wrap {
        width: inherit;
        height: inherit;
        background: #1469FF;
        
        .q1-section {
            width: 60%;
            height: inherit;
            padding: 40px 80px;
            
            .q1-number {
                font-family: Roboto-Bold, serif;
                font-size: 64px;
                color: #FF3C82;
                text-align: center;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .q1-title {
                font-family: Roboto-Bold, serif;
                font-size: 36px;
                color: #FFFFFF;
                line-height: 48px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .q1-desc {
                font-family: Roboto-Regular, serif;
                font-size: 24px;
                color: #0027C8;
                line-height: 36px;
                margin-bottom: 20px;
            }
            .q1-option {
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    margin: 0 auto 20px;
                    height: 56px;
                    border: 2px solid #FFFFFF;
                    border-radius: 30.5px;
                    
                    font-family: Roboto-Regular, serif;
                    font-size: 20px;
                    color: #FFFFFF;
                    text-align: center;
                    line-height: 54px;
                    cursor: pointer;
                    
                    transition: all 0.4s;
                }
                li:hover {
                    background: #ffffff;
                    color: #1469FF;
                }
            }
            
        }
        .q1-animation-section {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            background: #0027C8;
            
            .animation-square {
                width: 179px;
                height: 179px;
                background: #FF3C82;
                position: absolute;
                left: 60px;
                top: 100vh;
            }
            .animation-tri {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0px 70px 120px 70px;
                border-color: transparent transparent #ffffff transparent;
                position: absolute;
                top: calc(100vh + 100px);
                right: -40px;
            }
            .animation-circle {
                width: 400px;
                height: 400px;
                border-radius: 50%;
                background: #000000;
                position: absolute;
                right: -90px;
                bottom: -100vh;
            }
        }
    }
    
    
    
    
    //    .content {
    //    width: 100vw;
    //    transition: all 1s;
    //    z-index: 5;
    //    text-align: center;
    //    h1 {
    //        font-family: Roboto-Bold, serif;
    //        font-size: 64px;
    //        color: #FFFFFF;
    //    }
    //    
    //    p {
    //        font-family: Roboto-Regular, serif;
    //        font-size: 24px;
    //        color: #FFFFFF;
    //        line-height: 36px;
    //    }
    //}
    .rect-black {
        width: 430px;
        height: 430px;
        background: #000;
        margin: 0 auto;
        z-index: 1;
        //transition: all 4s;
        position: absolute;
    }
    .circle-blue {
        height: 534px;
        width: 539px;
        background-color: #0027C8;
        border-radius: 50%;
        transition: all 4s;
        z-index: 2;
        position: absolute;
    }
`;