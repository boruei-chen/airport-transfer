import styled, { css } from 'styled-components';
import { Props } from './Textarea.types';

const ErrorMessage = styled.span`
  color: #D3455B;
  font-size: 14px;
  margin-top: .3125rem;
  display: inline-block;
`;

const Input = styled.textarea<Pick<Props, 'disabled'>>`
  width: 100%;
  background-color: ${props => props.disabled ? '#F7F9FA' : 'initial'};
  border: 1px solid #C5CED6;
  border-radius: 5px;
  box-sizing: border-box;
  color: #4B5C6B;
  padding: .4375rem .625rem;
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
  display: flex;
  flex-direction: column;
`;

export const Textarea = Object.assign(
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
