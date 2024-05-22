import styled from 'styled-components';

const Controls = styled.div`
  margin-top: .9375rem;
  & > *:not(:last-child) {
    margin-bottom: .3125rem;
  }
`;

const Desc = styled.p`
  color: #4B5C6B;
  font-size: 16px;
  line-height: 1.2;
  margin: .625rem 0 0 0;
`;

const Title = styled.h3`
  color: #4B5C6B;
  font-size: 20px;
  font-weight: normal;
  margin: 0;
`;

export const DropoffNotFoundDialog = Object.assign(
  styled.div``,
  {
    Title,
    Desc,
    Controls
  }
);
