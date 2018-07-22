import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import { Container } from "components/Container";
import Section from 'components/Section';
import { SectionsContainer, DashboardHeader } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class DashboardPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const sections = [
      {
        name:'Marca',
        icon:require('assets/icon-registred.png')
      },
      {
        name:'Tag',
        icon:require('assets/icon-tag.png')
      },
      {
        name:'Propriedade',
        icon:''
      }
    ];

    return (
      <Container>
        <DashboardHeader> { 'Bem vindo Mercado do João' } </DashboardHeader>
        <SectionsContainer>
          {
            sections.map((section, key) => {
              return (
                <Section
                  key={key}
                  name={section.name}
                  icon={section.icon}
                />
              );
            })
          }
        </SectionsContainer>
      </Container>
    );
  }
}

DashboardPage.propTypes = {

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
)(DashboardPage);
