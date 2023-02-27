import styled, { css } from 'styled-components';

export const LabelText = styled.span`
  display: block;
  margin-bottom: 16px;
  line-height: 24px;
  text-align: center;
`;

export interface TouchedProps {
  isTouched?: boolean;
}

export const baseControlStyles = css<TouchedProps>`
  display: block;
  border: 1px solid lightgrey;
  padding: 8px 8px 8px 8px;
  width: 100%;
  line-height: 16px;
  text-align: center;

  &:invalid {
    ${({ isTouched }) => (isTouched ? `border-color: red` : '')};
  }
`;

export const BaseControl = styled.input<TouchedProps>`
  ${baseControlStyles}
`;

export const HelperText = styled.span`
  display: block;
  visibility: hidden;
  margin-top: 8px;
  margin-left: 12px;
  line-height: 16px;
  text-align: center;
  color: red;
`;

export const ControlWrap = styled.div`
  display: inline-block;
  position: relative;
  padding: 0 32px;
  width: 100%;
`;

export const Label = styled.label<TouchedProps>`
  display: inline-block;
  //width: 100%;

  ${({ isTouched }) =>
    isTouched
      ? css`
          ${BaseControl}:invalid + ${HelperText} {
            visibility: visible;
          }
        `
      : ''}
`;
