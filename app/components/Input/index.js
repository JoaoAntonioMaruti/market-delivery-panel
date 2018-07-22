import React from 'react';
import { InputContainer, InputStyled, Label, Span } from './styles';

const Input = (props) => {
  const {
    margin,
    label,
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
      </Label>
    </InputContainer>
  );
}

export default Input;
