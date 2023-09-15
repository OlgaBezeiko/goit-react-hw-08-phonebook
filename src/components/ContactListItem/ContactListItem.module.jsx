import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease-in-out; 

  &:hover {
    background-color: #f9e14e; 
  }
`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
  color: #333; 
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
  color: #777; 
`;

export const Button = styled.button`
  margin: 8px;
  padding: 4px 14px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #85d3ff;
  color: #fff;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out; 

  &:hover {
    background-color: #54a6c2;
    transform: scale(1.1); 
  }

  &:active {
    background-color: #207b9b;
  }
`;