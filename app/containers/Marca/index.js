import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import { CadastroBox } from './styles';
// componnets
import Input from "components/Input";
import Checkbox from "components/Checkbox";

/* eslint-disable react/prefer-stateless-function */
export class Marca extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CadastroBox>
        <div style={ { display: 'flex' } }>
          <Input  style={{ width: 80 }} placeholder={'id'} label={'id'} type={'text'} />
          <Input placeholder={'Descrição'} label={'Descrição'} type={'text'} />
        </div>
        <div>
          <Checkbox label={'Situação'} checked={true} />
        </div>
      </CadastroBox>
    );
  }
}

Marca.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'marca', reducer });
const withSaga = injectSaga({ key: 'marca', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Marca);
