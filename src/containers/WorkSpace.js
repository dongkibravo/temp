import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layouts/WorkSpace';

const WorkSpaceLayout = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={matchProps =>
      <Layout {...matchProps}>
        <Component {...matchProps} />
      </Layout>}
  />;

const WorkSpace = () =>
  <Switch>
    <WorkSpaceLayout
      exact
      path="/:hotelName"
      component={() => <div>Overview</div>}
    />
    <WorkSpaceLayout
      path="/:hotelName/dashboard"
      component={() => <div>Dashboard</div>}
    />
    <WorkSpaceLayout
      path="/:hotelName/pricing"
      component={() => <div>Pricing</div>}
    />
  </Switch>;

export default WorkSpace;
