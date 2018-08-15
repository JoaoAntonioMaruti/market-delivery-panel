import React from 'react';
import { ErrorsContainer, Error } from './styles';

const Errors = props => {
  const { messages } = props;

  return (
    <ErrorsContainer>
      {typeof messages == 'string'
        ? messages
        : messages.map((error, index) => {
            return <Error key={index}>{error}</Error>;
          })}
    </ErrorsContainer>
  );
};

export default Errors;
