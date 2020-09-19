import React from 'react';
import styles from './HomePage.module.scss';
import logo from '../../../../public/spacex_logo.png';

const HomePage = () => (
  <div className={styles.logo}>
    <img src={logo} />
  </div>
);

export default HomePage;
