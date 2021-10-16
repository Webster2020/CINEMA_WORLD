import React from 'react';
import PropTypes from 'prop-types';
import styles from './Seat.scss';
import Button from '../Button/Button';

const Seat = ({ seat, onClick, isSelected, isBooked }) => {
  return (
    <div className={styles.seat}>
      {!isBooked ? (
        <Button
          variant='seatButton'
          className={isSelected && styles.seatClicked}
          onClick={(e) => onClick(e, seat)}
        >
          {seat.toUpperCase()}
        </Button>
      ) : (
        <Button
          variant='seatButton'
          className={styles.seatBooked}
          onClick={(e) => e.preventDefault()}
        >
          {seat.toUpperCase()}
        </Button>
      )}
    </div>
  );
};

Seat.propTypes = {
  seat: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  isBooked: PropTypes.bool,
};

export default Seat;
