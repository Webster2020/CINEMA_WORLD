import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ConfirmData.scss';
import { arrToStr } from '../../../utils/arrayToString';

const ConfirmData = ({ confirmData }) => {
  return (
    <div className={styles.confirmDataWrapper}>
      <h1 className={styles.confirmDataHeader}>BOOKING CONFIRM!</h1>
      <h2 className={styles.confirmDataTitle}>BOOKING DATA</h2>
      {Object.keys(confirmData).map((key) => {
        return (
          <div key={shortid.generate()} className={styles.confirmDataRow}>
            <h3>{key.toUpperCase()}:</h3>
            {key === 'seats' ? (
              <h3>{arrToStr(confirmData[key]) || 'X1, X2'}</h3>
            ) : (
              <h3>{confirmData[key] || 'hour'}</h3>
            )}
          </div>
        );
      })}
      <h2 className={styles.confirmDataTitle}>
        BOOKING NUMBER:
        <span className={styles.confirmDataNumber}>{shortid.generate()}</span>
      </h2>
    </div>
  );
};

ConfirmData.propTypes = {
  confirmData: PropTypes.object,
};

export default ConfirmData;
