import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  margin: auto;
  padding: 20px;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 14px;
`;

export const Title = styled.h2`
  margin: 0;
  cursor: pointer;
  transition: text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow: 0 0 5px yellow; 
    font-size: 28px;
  }
`;