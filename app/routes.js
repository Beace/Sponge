/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';

export default () => (
  <App>
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </App>
);
