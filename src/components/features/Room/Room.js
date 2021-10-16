import React from 'react';
import styles from './Room.scss';
import Seats from '../../features/Seats/SeatsContainer';

const Room = () => {
  return (
    <div className={styles.roomWrapper}>
      <Seats />
    </div>
  );
};

export default Room;
