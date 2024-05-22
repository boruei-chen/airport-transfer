import styled from 'styled-components';

const Text = styled.h3`
  color: #4B5C6B;
  font-size: 20px;
  font-weight: normal;
  margin: 1.25rem 0 0 0;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #19AE9F;
  border-radius: 50%;
  padding: .3125rem;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const DropoffDoneDialog = Object.assign(
  styled.div`
    margin: 1.5625rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  {
    Icon,
    Text
  }
);
