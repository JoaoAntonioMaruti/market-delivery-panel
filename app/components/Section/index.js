import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionStyled, SectionName } from './styles';

const Section = (props) => {
  const { name, icon } = props;
  return (
    <SectionContainer>
      <SectionStyled>
        <img src={icon} />
      </SectionStyled>
      <SectionName> { name } </SectionName>
    </SectionContainer>
  );
}

Section.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

export default Section;
