import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionStyled, SectionName, Options, Option } from './styles';

class Section extends React.Component {
  constructor(props){
    super(props);
    this.state = { opened: false };
  };
  openOptions () {
    const { opened } = this.state;
    return this.setState({opened:!opened})
  }

  render () {
    const { name, icon, options } = this.props;
    const { opened } = this.state;
    return (
      <SectionContainer>
        <SectionStyled onClick={() => this.openOptions()}>
          <img src={icon} />
        </SectionStyled>
        <SectionName> { name } </SectionName>
        {
          opened ? (
            <Options>
              {
                options.map((option, index) => {
                  return (
                    <Option key={index} onClick={option.action}> { option.name } </Option>
                  );
                })
              }
            </Options>
          ) : null
        }
      </SectionContainer>
    );
  };
}

Section.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  icon: PropTypes.node.isRequired
};

export default Section;
