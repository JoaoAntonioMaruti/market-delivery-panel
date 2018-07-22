import styled from 'styled-components';

const InputContainer = styled.div`
  width:100%;
  margin:10px 0;
`;
const InputStyled = styled.input`
  font: 18px Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  display: block;
  border: none;
  padding: 20px;
  width: 100%;
  background:#FFF;
  margin-bottom: 20px;
  font-size: 18px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    transition: all 0.2s ease-in-out;
    color: #999;
    font: 18px Helvetica, Arial, sans-serif;
  }

  &:focus, &.populated {
    padding-top: 28px;
    padding-bottom: 12px;

    &::placeholder {
      color: transparent;
    }

    & + span {
      opacity: 1;
      top: 10px;
    }
  }
`;
const Label = styled.div`
  position: relative;
  display: block;
`;

const Span = styled.span`
  color: #232323;
  font: 13px Helvetica, Arial, sans-serif;
  position: absolute;
  top: 0px;
  left: 20px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`

export { InputContainer, InputStyled, Label, Span };
