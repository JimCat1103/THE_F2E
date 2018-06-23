import styled from 'styled-components';

export function clearFix() {
    return `
    *zoom: 1;
    &::after {
      display: table;
      content:  "''";
      clear: both;
    }
  `;
}

export const Style = styled.div`

`;