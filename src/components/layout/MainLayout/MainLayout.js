import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => <main className={styles.mainLayoutContainer}>{children}</main>;

MainLayout.defaultProps = {
  children: '',
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
