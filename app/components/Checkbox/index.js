import React from 'react';
import { CheckboxStyled, Label, Touchable } from './styles';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: props.checked
    };
  }

  handleChange() {
    this.setState({ check: !this.state.check})
  }

  render() {
    const { label } = this.props;
    const { check } = this.state;

    return (
      <Touchable onClick={() => this.handleChange()}>
        <CheckboxStyled checked={check} />
        <Label> {label} </Label>
      </Touchable>
    );
  }
}

export default Checkbox;
