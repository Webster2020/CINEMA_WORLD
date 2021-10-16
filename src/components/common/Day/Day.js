import React from 'react';
import PropTypes from 'prop-types';
import styles from './Day.scss';
import Button from '../Button/Button';

const Day = ({ day, onClick, clicked }) => {
  return (
    <div className={styles.day}>
      <Button
        className={clicked && styles.dayClicked}
        onClick={(e) => onClick(e, day)}
      >
        {day.toUpperCase()}
      </Button>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.string,
  onClick: PropTypes.func,
  clicked: PropTypes.bool,
};

export default Day;
