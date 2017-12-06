import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Layout from './Layout';

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {this.props.children}
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  children: Proptypes.element.isRequired,
};
