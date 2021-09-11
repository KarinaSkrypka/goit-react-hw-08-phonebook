import React from 'react';

import styles from './HomeView.module.scss';

const HomeView = () => (
  <div className={styles.HomeView}>
    <h1 className={styles.Title}>
      Welcome to our application{' '}
      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>
    </h1>

    <p className={styles.IconPhonebook}>
      Use the app to create your own phonebook{' '}
      <span role="img" aria-label="Phonebook icon">
        📒
      </span>
    </p>
    <p className={styles.IconPhonebookAct}>
      <span className={styles.act}>sign up</span> and{' '}
      <span className={styles.act}>log in</span> and use all the features of the
      app.
    </p>
  </div>
);

export default HomeView;
