import React, { Component } from 'react';
import styles from './index.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Dashboard</h2>
        </div>
      </div>
    );
  }
}
