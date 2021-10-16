import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Seats.scss';
import Seat from '../../common/Seat/Seat';

const Seats = ({
  allState,
  seats,
  bookedSeats,
  selectSeatDispatch,
  unselectSeatDispatch,
}) => {
  useEffect(() => {
    console.log(allState);
  });

  const [isClicked, setIsClicked] = useState(false);
  const [clickedSeats, setClickedSeats] = useState([]);

  const clickHandler = (e, elem) => {
    e.preventDefault();
    if (clickedSeats.indexOf(elem) === -1) {
      setIsClicked(!isClicked);
      setClickedSeats((selectedSeats) => [...selectedSeats, elem]);
      console.log('clickedSeats');
      console.log(clickedSeats);
      selectSeatDispatch(elem);
    } else {
      setIsClicked(!isClicked);
      setClickedSeats((clickedSeats) => {
        clickedSeats.splice(clickedSeats.indexOf(elem), 1);
        console.log('clickedSeats');
        console.log(clickedSeats);
        return clickedSeats;
      });
      unselectSeatDispatch(elem);
    }
  };

  return (
    <div className={styles.seatsWrapper}>
      {seats.map((seat) => (
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
  allState: PropTypes.object,
  seats: PropTypes.array,
  bookedSeats: PropTypes.array,
  selectSeatDispatch: PropTypes.func,
  unselectSeatDispatch: PropTypes.func,
};

export default Seats;
