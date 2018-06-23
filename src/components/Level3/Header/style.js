import styled from 'styled-components';
export const Style = styled.header`

    .header-mobile {
        opacity: 0;
        /* Position and sizing of burger button */
        .bm-burger-button {
            position: fixed;
            width: 36px;
            height: 30px;
            right: 36px;
            top: 20px;
        }
        
        /* Color/shape of burger icon bars */
        .bm-burger-bars {
            background: #ffffff;
        }
        
        /* Position and sizing of clickable cross button */
        .bm-cross-button {
            height: 24px;
            width: 24px;
        }
        
        /* Color/shape of close button cross */
        .bm-cross {
            background: #ffffff;
        }
        
        /* General sidebar styles */
        .bm-menu {
            background: #373a47;
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
        }
        
        /* Morph shape necessary with bubble or elastic */
        .bm-morph-shape {
            //fill: #373a47;
        }
        
        /* Wrapper for item list */
        .bm-item-list {
            color: #ffffff;
            padding: 2rem;
            font-size: 1.6rem;
            & > a {
                color: #ffffff;
                margin-top: 10px
            }
        }
        
        /* Individual item */
        .bm-item {
            display: inline-block;
        }
        
        /* Styling of overlay */
        .bm-overlay {
            background: rgba(0, 0, 0, 0.3);
        }
        
        .user-mobile {
            border-top: solid 2px rgb(155, 155, 155);
            margin-top: 20px;
            padding-top: 20px;
        }
    }

    .header {
        display: flex;
        height: 70px;
        background-color: #000000;
        .logo {
            width: auto;
            padding: 0 30px;
            line-height: 70px;
            font-family: "HelveticaNeue-Bold", serif;
            font-size: 24px;
            color: #FFFFFF;
            font-weight: bold;
        }
        .user {
            width: auto;
            padding: 0 30px;
            line-height: 70px;
            font-family: "HelveticaNeue-Bold", serif;
            font-size: 16px;
            color: #FFFFFF;
            font-weight: bold;
        }
        .menu {
            flex: 1;
            & > * {
                position: relative;
                display: inline-block;
                text-decoration: none;
                padding: 0 16px;
                line-height: 70px;
                font-family: "HelveticaNeue-Bold", serif;
                font-size: 16px;
                color: #9B9B9B;
                font-weight: bold;
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    
                    display: inline-block;
                    width: 100%;
                    height: 3px;
                    background: #9B9B9B;
                    opacity: 0;
                }
                &.active, &:hover {
                    color: rgba(255, 255, 255, 1.00);
                    &:after {
                        background: rgba(255, 255, 255, 1.00);
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        .header-mobile {
            opacity: 1;
        }
        .header {
            .user {
                display: none;
            }
            .menu {
                display: none;
            }
        }
    }
`;