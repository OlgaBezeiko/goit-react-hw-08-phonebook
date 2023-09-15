import styled from '@emotion/styled';

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 0.25em;
`;

export const Input = styled.input`
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out; 
  
  &:focus {
    outline: none;
    border-color: #85d3ff; 
    box-shadow: 0 0 5px rgba(133, 211, 255, 0.5); 
  }

  &:hover {
    outline: none;
    border-color: #85d3ff; 
    box-shadow: 0 0 5px rgba(133, 211, 255, 0.5); 
  }


`;

export const Button = styled.button`
  border-radius: 5px;
  margin-top: 0.5em;
  padding: 0.25em 1em;
  cursor: pointer;
  
  }
`;