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
            placeholder={'Data'}
            onChange={event => this.handleChange(event)}
            name={'data'}
            label={'Data'}
            type={'date'}
          />
          <Input
            placeholder={'Titulo'}
            onChange={event => this.handleChange(event)}
            name={'titulo'}
            label={'Titulo'}
            type={'text'}
          />
          <Input
            placeholder={'Descrição'}
            name={'descricao'}
            onChange={event => this.handleChange(event)}
            label={'Descrição'}
            type={'text'}
          />
          <Input
            placeholder={'Valor'}
            name={'valor'}
            onChange={event => this.handleChange(event)}
            label={'Valor'}
            min={0.1}
            type={'number'}
          />
          <Checkbox name={'status'} label={'Pago'} checked={false} />

          <ButtonContainer>
            <Button title={'Lançar'} onClick={() => this.submit()} />
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
