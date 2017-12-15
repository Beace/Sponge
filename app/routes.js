/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout';
import Dashboard from './containers/Dashboard';
import ArticleListPage from './containers/ArticleListPage';
import ArticleDetailPage from './containers/ArticleDetailPage';

export default () => (
  <Layout>
    <Switch>
      <Route path="/articles" component={ArticleListPage} />
      <Route path="/articles/:id" component={ArticleDetailPage} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </Layout>
);
