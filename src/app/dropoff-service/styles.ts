import styled from 'styled-components';

const SectionContent = styled.div`
  & > *:not(:last-child) {
    margin-bottom: .625rem;
  }
`;

const SectionTitle = styled.h3`
  color: #4B5C6B;
  font-size: 18px;
  font-weight: normal;
  margin: 0 0 .9375rem 0;
`;

const Section = styled.section`
  margin-bottom: 1.5625rem;
`;

const Form = styled.form``;

const Title = styled.h1`
  color: #4B5C6B;
  font-size: 22px;
  font-weight: normal;
  text-align: center;
  margin: 1.5625rem 0;
`;

export const Page = Object.assign(
  styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 1.25rem;
  `,
  {
    Title,
    Form,
    Section,
    SectionTitle,
    SectionContent
  }
);
