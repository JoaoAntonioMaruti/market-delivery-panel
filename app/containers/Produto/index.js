import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Produto extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

Produto.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'produto', reducer });
const withSaga = injectSaga({ key: 'produto', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Produto);
