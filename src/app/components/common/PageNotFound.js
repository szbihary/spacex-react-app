import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageNotFound.module.scss';

const PageNotFound = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h2>Oops! Page not found.</h2>
      <Link to="/">Go to Home Page</Link>
    </div>
  </div>
);
export default PageNotFound;
