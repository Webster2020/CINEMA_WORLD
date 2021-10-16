import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logo}>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
          CINEMA<span>&nbsp;WORLD</span>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
