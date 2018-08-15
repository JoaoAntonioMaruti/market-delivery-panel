import React from 'react';
import { CheckboxStyled, Label, Touchable } from './styles';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    const { onCheckChange } = this.props;
    onCheckChange();
  }

  render() {
    const { label, checked } = this.props;

    return (
      <Touchable onClick={() => this.handleChange()}>
        <CheckboxStyled checked={checked} />
        <Label> {label} </Label>
      </Touchable>
    );
  }
}

export default Checkbox;
