import React from 'react';

import { BrowserRouter as Routers, Switch, Route } from 'react-router-dom';

import List from '../pages/List/index';
import Dashboard from '../pages/Dashboard';
import { Layout } from '../components/Layout';

const AppRoutes: React.FC = () => (
  <Routers>
    <Layout>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/List/:type" exact component={List} />
      </Switch>
    </Layout>
  </Routers>
);

export default AppRoutes;
