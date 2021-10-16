import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './Seats.module.scss';

import Seat from '../../common/Seat/Seat';

const Seats = ({
  seats,
  bookedSeats,
  selectSeatDispatch,
  unselectSeatDispatch,
}) => {

  const [isClicked, setIsClicked] = useState(false);
  const [clickedSeats, setClickedSeats] = useState([]);

  const clickHandler = (e, elem) => {
    e.preventDefault();
    if (clickedSeats.indexOf(elem) === -1) {
      setIsClicked(!isClicked);
      setClickedSeats(selectedSeats => [...selectedSeats, elem]);
      selectSeatDispatch(elem);
    } else {
      setIsClicked(!isClicked);
      setClickedSeats(clickedSeats => {
        clickedSeats.splice(clickedSeats.indexOf(elem), 1);
        return clickedSeats;
      });
      unselectSeatDispatch(elem);
    }
  };

  return (
    <div className={styles.seatsWrapper}>
      {seats.map(seat => (
        <Seat
          key={shortid.generate()}
          seat={seat}
          onClick={(e) => clickHandler(e, seat)}
          isSelected={clickedSeats.indexOf(seat) !== -1 ? true : false}
          isBooked={bookedSeats.includes(seat)}
        />
      ))}
    </div>
  );
};

Seats.propTypes = {
  seats: PropTypes.array,
  bookedSeats: PropTypes.array,
  selectSeatDispatch: PropTypes.func,
  unselectSeatDispatch: PropTypes.func,
};

export default Seats;
