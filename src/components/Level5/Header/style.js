import styled from 'styled-components';
import {BLACK, GREEN} from "../color_consts";

export function get_background_color(is_bright) {
    return is_bright ? BLACK : GREEN;
}

export function get_title_color(is_bright) {
    return is_bright ? GREEN : BLACK;
}

export const Style = styled.div`
    --backgroundColor: ${props => get_background_color(props.is_bright)};
    --titleColor: ${props => get_title_color(props.is_bright)};

    width: 100%;
    height: 74px;
    background: var(--backgroundColor);
    & > div {
        color: var(--titleColor);
        font-family: Roboto-Black, serif;
        font-size: 36px;
        text-align: center;
        line-height: 74px;
        font-style: italic;
        font-weight: bold;
    }
`;