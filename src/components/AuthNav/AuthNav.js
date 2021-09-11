import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';

const AuthNav = () => (
  <div className={styles.AuthNav}>
    <ul className={styles.AuthNavList}>
      <li className={styles.AuthNavListItem}>
        <NavLink
          to="/register"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Sign Up
        </NavLink>
      </li>
      <li className={styles.AuthNavListItem}>
        <NavLink
          to="/login"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Log In
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AuthNav;
