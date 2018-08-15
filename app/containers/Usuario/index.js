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
import { createAccount } from './actions';
import Button from 'components/Button';
import Errors from 'components/FormError';
import extractMessage from 'utils/serverErrors';

/* eslint-disable react/prefer-stateless-function */
export class Usuario extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
      errors: [],
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submit() {
    const { nome, login, senha, status } = this.state;
    const user = { nome, login, senha, status };

    this.setState({
      nomeError: !login ? 'Entre com o Nome' : '',
      loginError: !login ? 'Entre com o usuário' : '',
      senhaError: !senha ? 'Entre com a senha' : '',
    });

    if (nome && login && senha) {
      createAccount(user).then(response => {
        if (response.data) {
          const { token } = response.data;

          localStorage.setItem('token', token);
          return (window.location = '/');
        }
        const errors = extractMessage(response.message);
        return this.setState({ errors });
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { nomeError, loginError, senhaError, errors } = this.state;

    return (
      <Container>
        <CadastroBox>
          <Input
            placeholder={'Nome'}
            onChange={event => this.handleChange(event)}
            name={'nome'}
            label={'Nome *'}
            onChange={value => this.handleChange(value)}
            type={'text'}
            error={nomeError}
          />
          <Input
            placeholder={'Nome de usuário'}
            name={'login'}
            onChange={event => this.handleChange(event)}
            label={'Nome de usuário *'}
            type={'text'}
            error={loginError}
          />
          <Input
            placeholder={'Senha'}
            name={'senha'}
            onChange={event => this.handleChange(event)}
            label={'Senha *'}
            type={'password'}
            error={senhaError}
          />
          <Errors messages={errors} />
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
