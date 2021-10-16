import React from 'react';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logo}>
        CINEMA<span>&nbsp;WORLD</span>
      </div>
    </div>
  );
};

export default Logo;
