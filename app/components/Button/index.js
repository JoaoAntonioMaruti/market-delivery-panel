import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styles';

const Button = (props) => {
  const { title, ...buttonProps } = props;
  return (
    <ButtonStyled {...buttonProps}>
      { title }
    </ButtonStyled>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Button;
