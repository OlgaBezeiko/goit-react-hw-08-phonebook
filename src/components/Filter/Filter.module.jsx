import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f00;
  }
`;

export const Input = styled.input`
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease-in-out, width 0.3s ease-in-out; 

  &:focus:not(:placeholder-shown) {
    border-color: #85d3ff;
    outline: none;
    width: 270px; 
    transform: scale(1.2);
  }
`;