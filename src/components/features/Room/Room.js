import React from 'react';
import styles from './Room.module.scss';
import Seats from '../../features/Seats/SeatsContainer';

const Room = () => {
  return (
    <div className={styles.roomWrapper}>
      <Seats />
    </div>
  );
};

export default Room;
