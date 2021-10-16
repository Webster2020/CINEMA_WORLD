import React from 'react';
import PropTypes from 'prop-types';
import styles from './ValidMessage.scss';

const ValidMessage = ({ children, variant, text }) => {
  let style;

  switch (variant) {
    case 'noSeat':
      style = `${styles.validMessageWrapper} ${styles.validMessageSeat}`;
      break;
    case 'emptyName':
      style = `${styles.validMessageWrapper} ${styles.validMessageName}`;
      break;
    case 'emptyEmail':
      style = `${styles.validMessageWrapper} ${styles.validMessageEmail}`;
      break;
    case 'invalidEmail':
      style = `${styles.validMessageWrapper} ${styles.validMessageEmail2}`;
      break;
    case 'unchecked':
      style = `${styles.validMessageWrapper} ${styles.validMessageCheckBox}`;
      break;
    default:
      style = styles.validMessageWrapper;
  }

  return (
    <div className={style}>
      <div className={styles.validMessage}>{text}</div>
      {children}
    </div>
  );
};

ValidMessage.defaultProps = {
  children: '',
};

ValidMessage.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  text: PropTypes.string,
};

export default ValidMessage;
