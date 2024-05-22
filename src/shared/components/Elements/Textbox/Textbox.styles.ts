import styled, { css } from 'styled-components';
import { Props } from './Textbox.types';

const ErrorMessage = styled.span`
  color: #D3455B;
  font-size: 14px;
  margin-top: .3125rem;
  display: inline-block;
`;

const Input = styled.input<Pick<Props, 'disabled'>>`
  width: 100%;
  height: 36px;
  background-color: ${props => props.disabled ? '#F7F9FA' : 'initial'};
  border: 1px solid #C5CED6;
  border-radius: 5px;
  box-sizing: border-box;
  color: ${props => props.disabled ? '#CAD5DE' : '#4B5C6B'};
  padding: 0 .625rem;
  outline: none;
  &::placeholder {
    color: #C3CFD9;
  }
`;

const Label = styled.span`
  color: #4B5C6B;
  font-size: 14px;
  margin-bottom: .3125rem;
  display: inline-block;
`;

const Wrapper = styled.label`
  display: block;
`;

export const Textbox = Object.assign(
  styled.div<{ $invalid?: boolean; }>`
    ${props => props.$invalid && css`
      ${Input} {
        border-color: #D3455B;
      }
    `}
  `,
  {
    Wrapper,
    Label,
    Input,
    ErrorMessage
  }
);
