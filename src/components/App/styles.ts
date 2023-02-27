import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 600px;
  }
`;
