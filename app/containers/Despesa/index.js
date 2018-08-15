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
import Errors from 'components/FormError';
import moment from 'moment';
import extractMessage from 'utils/serverErrors';
import { saveOrUpdateExpense, getExpense } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Despesa extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      errors: [],
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    const { id } = params;
    if (id) {
      getExpense(id).then(response => {
        if (response.data) {
          const {
            data,
            descricao,
            id,
            id_usurio,
            status,
            titulo,
            valor,
          } = response.data;

          this.setState({
            data: moment(data).format('YYYY-MM-DD'),
            descricao,
            id,
            id_usurio,
            status: Boolean(status),
            titulo,
            valor,
          });
        } else {
          return (window.location = '/');
        }
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleCheckChange() {
    this.setState({ status: !this.state.status });
  }

  submit() {
    const { data, descricao, valor, titulo, id } = this.state;
    const status = Number(this.state.status);
    const expense = { data, descricao, valor, titulo, status, id };

    this.setState({
      dataError: !data ? 'Entre com a Data' : '',
      descricaoError: !descricao ? 'Entre com a descrição' : '',
      valorError: !valor ? 'Entre com o valor' : '',
      tituloError: !titulo ? 'Entre com o titulo' : '',
    });

    if (data && descricao && valor && titulo) {
      saveOrUpdateExpense(expense).then(response => {
        if (response.data) {
          return (window.location = '/dashboard');
        }
        const errors = extractMessage(response.message);
        return this.setState({ errors });
      });
    }
  }

  render() {
    const {
      status,
      dataError,
      tituloError,
      descricaoError,
      valorError,
      data,
      titulo,
      descricao,
      valor,
      errors
    } = this.state;
    return (
      <Container>
        <CadastroBox>
          <Input
            placeholder={'Data'}
            onChange={event => this.handleChange(event)}
            value={data}
            name={'data'}
            label={'Data'}
            type={'date'}
            error={dataError}
          />
          <Input
            placeholder={'Titulo'}
            onChange={event => this.handleChange(event)}
            name={'titulo'}
            value={titulo}
            label={'Titulo'}
            type={'text'}
            error={tituloError}
          />
          <Input
            placeholder={'Descrição'}
            name={'descricao'}
            value={descricao}
            onChange={event => this.handleChange(event)}
            label={'Descrição'}
            type={'text'}
            error={descricaoError}
          />
          <Input
            placeholder={'Valor'}
            name={'valor'}
            value={valor}
            onChange={event => this.handleChange(event)}
            label={'Valor'}
            min={0.1}
            type={'number'}
            error={valorError}
          />
          <Checkbox
            name={'status'}
            label={'Pago'}
            checked={status}
            onCheckChange={() => this.handleCheckChange()}
          />
          <Errors messages={errors} />
          <ButtonContainer>
            <Button title={'Lançar'} onClick={() => this.submit()} />
          </ButtonContainer>
        </CadastroBox>
      </Container>
    );
  }
}

Despesa.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'despesa', reducer });
const withSaga = injectSaga({ key: 'despesa', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Despesa);
