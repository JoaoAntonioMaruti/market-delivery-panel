import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Tag extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

Tag.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tag', reducer });
const withSaga = injectSaga({ key: 'tag', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Tag);
