import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Input from 'components/Input';
import { Container } from 'components/Container';
import { LoginBox, LoginContainer } from './styles';
import Button from '../../components/Button';
import { auth } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loginError: '',
      senhaError: '',
    };
  }

  authenticate() {
    const { login, senha } = this.state;
    const user = { login, senha };

    this.setState({
      loginError: !login ? 'Entre com o usuário' : '',
      senhaError: !senha ? 'Entre com a senha' : '',
    });

    if (login && senha) {
      auth(user).then(response => {
        const { token } = response.data;
        if(token) {
          localStorage.setItem('token', token);
          return window.location = '/dashboard';
        }
        // handle errors
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { loginError, senhaError } = this.state;
    return (
      <Container>
        <LoginContainer>
          <LoginBox>
            <Input
              placeholder={'Usuário'}
              label={'Usuário'}
              name={'login'}
              onChange={value => this.handleChange(value)}
              type={'text'}
              error={loginError}
            />
            <Input
              placeholder={'Senha'}
              label={'Senha'}
              name={'senha'}
              onChange={value => this.handleChange(value)}
              type={'password'}
              error={senhaError}
            />
            <Button title={'Entrar'} onClick={() => this.authenticate()} />
            <Link to="/usuario"> Ou crie sua conta aqui </Link>
          </LoginBox>
        </LoginContainer>
      </Container>
    );
  }
}

LoginPage.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
