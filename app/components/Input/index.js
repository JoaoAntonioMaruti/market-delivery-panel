import React from 'react';
import { InputContainer, InputStyled, Label, Span, ErrorContainer, Error } from './styles';

const Input = (props) => {
  const {
    margin,
    label,
    error,
    ...inputProps
  } = props

  return (
    <InputContainer>
      <Label>
        <InputStyled
          margin={margin}
          {...inputProps}
          />
        <Span>{ label }</Span>
        <Error>{ error }</Error>
      </Label>
    </InputContainer>
  );
}

export default Input;
