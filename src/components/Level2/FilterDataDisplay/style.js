import styled from 'styled-components';

export const Style = styled.div`
    --contentColor: #9013FE;
    --borderColor: #9013FE;
    
    flex: 1;
    .title {
        padding-top: 20px;
    }
    .checked-categories {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;
      & > div {
          width: auto;
          height: 32px;
          color: var(--contentColor);
          border: solid 2px var(--borderColor);
          margin-right: 5px;
          border-radius: 1.6rem;
          margin-top: 5px;
          display: flex;
      }
    }
    & > div:nth-child(3) {
        margin-top: 20px;
    }
    @media screen and (max-width: 679px) {
        .title {
            padding-left: 30px;
        }
    }
`;