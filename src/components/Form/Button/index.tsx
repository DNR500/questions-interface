import styled from 'styled-components';

interface Props {
  isHidden: boolean;
}

export const Button = styled.button<Props>`
  border: 1px solid black;
  width: 100%;
  padding: 8px;
  background: transparent;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`;

Button.defaultProps = {
  isHidden: false,
};
