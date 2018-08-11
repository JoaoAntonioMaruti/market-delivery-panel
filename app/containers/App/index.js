import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import LoginPage from 'containers/Login';
import DashboradPage from 'containers/Dashboard';
import MarcaPage from 'containers/Marca';
import ProdutoPage from 'containers/Produto';
import PropriedadePage from 'containers/Propriedade';
import TagPage from 'containers/Tag';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="" defaultTitle="Market" >
        <meta name="description" content="Marker" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={DashboradPage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/marca" component={MarcaPage} />
        <Route path="/tag" component={TagPage} />
        <Route path="/propriedade" component={PropriedadePage} />
        <Route path="/produto" component={ProdutoPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
