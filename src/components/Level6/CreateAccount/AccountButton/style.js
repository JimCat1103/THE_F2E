import styled from 'styled-components';

export function get_status_color(disabled) {
    return disabled ? '#BEE1FF' : '#0275D8';
}

export const Style = styled.div`
    --buttonColor: ${props => get_status_color(props.disabled)};

    width: 100%;
    background: var(--buttonColor);
    border: 2px solid var(--buttonColor);
    border-radius: 8px;
    height: 52px;
    button {
        width: 100%;
        height: 100%;
        background: var(--buttonColor);
        border: 2px solid var(--buttonColor);
        border-radius: 8px;
        
        font-family: Roboto-Regular, serif;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
    }
    button:hover {
        border: 2px solid var(--buttonColor);
        background: var(--buttonColor);
        color: #FFFFFF;
    }
    button[disabled]:hover {
        border: 2px solid var(--buttonColor);
        background: var(--buttonColor);
        color: #FFFFFF;
    }
    button[disabled] {
        border: 2px solid var(--buttonColor);
        background-color: var(--buttonColor);
        color: #FFFFFF;
    }
`;