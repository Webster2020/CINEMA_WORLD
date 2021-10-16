import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheckBox.module.scss';

const CheckBox = ({ inputType, inputName, inputValue, handleChangeValue }) => {
  return (
    <div className={styles.checkBoxWrapper}>
      <label className={styles.checkBox}>
        I accept all the rules and regulations
        <input
          type={inputType}
          name={inputName}
          checked={inputValue}
          onChange={handleChangeValue}
        />
        <span className={styles.checkMark}></span>
      </label>
    </div>
  );
};

CheckBox.defaultProps = {
  inputType: 'text',
  inputName: 'text',
};

CheckBox.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.bool,
  handleChangeValue: PropTypes.func,
};

export default CheckBox;
