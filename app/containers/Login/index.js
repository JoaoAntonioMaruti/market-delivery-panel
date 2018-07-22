import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Input from "components/Input";
import { Container } from "components/Container";
import { LoginBox, LoginContainer } from './styles';
import Button from '../../components/Button';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <LoginContainer>
          <LoginBox>
            <Input placeholder={'Usuário'} label={'Usuário'} type={'text'} />
            <Input placeholder={'Senha'} label={'Senha'} type={'password'}/>
            <Button title={'Entrar'} onClick={() => alert('click') }/>
          </LoginBox>
        </LoginContainer>
      </Container>
    );
  }
}

LoginPage.propTypes = {

};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({

});

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
