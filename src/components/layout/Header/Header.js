import React from 'react';
import styles from './Header.module.scss';
import Banner from '../Banner/Banner';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Banner />
    </header>
  );
};

export default Header;
