import React from 'react';
import PropTypes from 'prop-types';
import styles from './Info.module.scss';

const Info = ({ children }) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.info}>
        INFO:&nbsp;<span>{children}</span>
      </div>
    </div>
  );
};

Info.defaultProps = {
  children: '',
};

Info.propTypes = {
  children: PropTypes.node,
};

export default Info;
