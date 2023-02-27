import styled, { keyframes, css } from 'styled-components';
import { FC } from 'react';

const slidein = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

interface QuestionContainerProps {
  animateIn: boolean;
  animateInTime: number;
}

export const QuestionContainer = styled.div<QuestionContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  ${({ animateIn, animateInTime }) =>
    animateIn &&
    css`
      animation: ${slidein} ${animateInTime}ms ease-in-out;
      will-change: transform;
    `}
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

export const ButtonContainer = styled<FC>(QuestionContainer)`
  align-items: center;
  min-height: 74px;
`;
