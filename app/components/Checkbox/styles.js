import styled from 'styled-components';

const CheckboxStyled = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  border:3px solid #${props => (props.checked ? '5dbc29' : '9b9b9b')};
  user-select: none;
  &:after {
    content:'${props => (props.checked ? '✓' : '')}';
    position: absolute;
    color: #${props => (props.checked ? '5dbc29' : '9b9b9b')};
    margin-top:-5px;
    margin-left:2px;
    font-size:22px;
  }
`;

const Label = styled.div`
  margin-left: 10px;
`;

const Touchable = styled.a`
  display: flex;
`;

export { CheckboxStyled, Label, Touchable };
