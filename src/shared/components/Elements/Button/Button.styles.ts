import styled from 'styled-components';
import { Props } from './Button.types';

export const Button = styled.button<{ $variant: Props['variant'] }>`
  width: 100%;
  background-color: ${props => props.$variant === 'filled' ? '#4B5C6B' : '#FFFFFF'};
  border: 1px solid ${props => props.$variant === 'filled' ? '#4B5C6B' : '#BEC4CA'};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${props => props.$variant === 'filled' ? '#FFFFFF' : '#4B5C6B'};
  font-size: 16px;
  line-height: 1;
  padding: .5625rem;
  cursor: pointer;
`;
