import React from 'react';
import styles from './Header.scss';
import Banner from '../Banner/Banner';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Banner />
    </header>
  );
};

export default Header;
