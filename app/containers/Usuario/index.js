import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import { Container, CadastroBox, ButtonContainer } from './styles';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
export class Usuario extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submit() {
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <CadastroBox>
          <Input
            placeholder={'Nome'}
            onChange={event => this.handleChange(event)}
            name={'nome'}
            label={'Nome'}
            type={'text'}
          />
          <Input
            placeholder={'Nome de usuário'}
            name={'login'}
            onChange={event => this.handleChange(event)}
            label={'Nome de usuário'}
            type={'text'}
          />
          <Input
            placeholder={'Senha'}
            name={'senha'}
            onChange={event => this.handleChange(event)}
            label={'Senha'}
            type={'password'}
          />

          <ButtonContainer>
            <Button title={'Cadastrar'} onClick={() => this.submit()} />
          </ButtonContainer>
        </CadastroBox>
      </Container>
    );
  }
}

Usuario.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'usuario', reducer });
const withSaga = injectSaga({ key: 'usuario', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Usuario);
