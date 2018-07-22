import styled from 'styled-components';

const ButtonStyled = styled.button`
  width:100%;
  border:1px solid #232323;
  color:#232323;
  padding:15px 0;
  border-radius:2px;
  text-transform:uppercase;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background:#FFFFFF;
  &:active, &:focus, &:hover {
    outline: none;
    background:#232323;
    color:#FFFFFF;
  }
`;


export { ButtonStyled };
