import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigationBar.module.scss';

const NavigationBar = () => {
  const activeStyle = { background: '#0061b1' };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to="/history" activeStyle={activeStyle}>
        History
      </NavLink>
      <NavLink to="/launches" activeStyle={activeStyle}>
        Launches
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
