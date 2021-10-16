import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './Days.module.scss';

import Day from '../../common/Day/Day';

const Days = ({ days, selectedDay, selectDayDispatch }) => {
  
  const [clickedDay, setClickedDay] = useState(selectedDay);

  const clickHandler = (e, elem) => {
    e.preventDefault();
    setClickedDay(elem);
    selectDayDispatch(elem);
  };

  return (
    <div className={styles.daysWrapper}>
      {days.map((day) => (
        <Day
          key={shortid.generate()}
          day={day}
          onClick={(e) => clickHandler(e, day)}
          clicked={clickedDay === day && true}
        />
      ))}
    </div>
  );
};

Days.propTypes = {
  days: PropTypes.array,
  selectedDay: PropTypes.string,
  selectDayDispatch: PropTypes.func,
};

export default Days;
