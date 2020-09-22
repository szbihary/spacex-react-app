import React from 'react';
import styles from './HomePage.module.scss';
import logo from '../../../../public/spacex-vector-logo.svg';
import launch from '../../../../public/spacex_launch.png';
import { SPACEX_API_DESCRIPTOR } from '../../config';

const HomePage = () => (
  <>
    <div className={styles.banner}>
      <div className={styles.appTitle}>
        <img src={logo} className={styles.logo} />
        <span className={styles.titleSection}>React App</span>
      </div>
      <img src={launch} className={styles.welcomeImage} />
      <div className={styles.apiInfo}>
        Powered by:&nbsp;
        <a href={SPACEX_API_DESCRIPTOR} target="_blank" rel="noopener noreferrer">
          r/SpaceX API
        </a>
      </div>
    </div>
  </>
);

export default HomePage;
