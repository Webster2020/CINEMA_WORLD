import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ inputType, inputName, inputValue, handleChangeValue }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={handleChangeValue}
      />
      <label htmlFor={inputType}>{inputName.toUpperCase()}</label>
    </div>
  );
};

Input.defaultProps = {
  inputType: 'text',
  inputName: 'text',
};

Input.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  handleChangeValue: PropTypes.func,
};

export default Input;
