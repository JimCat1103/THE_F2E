import styled from 'styled-components';

export const Style = styled.div`
    --whiteColor: #FFFFFF;
    --blackColor: #000000;

    width: 100%;
    max-width: 960px;
    margin: 20px auto 0;
    
    display: flex;
    .image {
        width: 50%;
        background: var(--whiteColor);
        border: 4px solid var(--blackColor);
        img {
            width: auto;
            height: auto;
            max-width: 100%;
            //max-height: 438px;
        }
    }
    .content {
        flex: 1;
        .title {
            background: var(--blackColor);
            height: 52px;
            font-family: Roboto-Bold, serif;
            font-size: 36px;
            color: var(--whiteColor);
            text-align: center;
        }
        .info-wrap {
            padding-top: 20px;
            padding-left: 20px;
            position: relative;
            display: flex;
            & > div:nth-child(1) {
                width: auto;
                margin-right: 20px;
                & > div {
                    height: 24px;
                    font-family: "Roboto-Bold", serif;
                    font-weight: bold;
                    font-size: 16px;
                    color: var(--blackColor);
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
                    color: var(--blackColor);
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
                  position: absolute;
                  bottom: -7px;
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
        }
    }
`;
