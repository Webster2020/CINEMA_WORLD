import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Shows.scss';
import Hour from '../../common/Hour/Hour';

const Shows = ({ hours, movie, selectHourDispatch, selectMovieDispatch }) => {
  const clickHandler = (e, hour, movie) => {
    e.preventDefault();
    selectHourDispatch(hour);
    selectMovieDispatch(movie);
  };

  return (
    <div className={styles.showsWrapper}>
      {hours.map((hour) => (
        <Hour
          key={shortid.generate()}
          hour={hour}
          movie={movie}
          onClick={(e) => clickHandler(e, hour, movie)}
        />
      ))}
    </div>
  );
};

Shows.propTypes = {
  hours: PropTypes.array,
  movie: PropTypes.string,
  selectHourDispatch: PropTypes.func,
  selectMovieDispatch: PropTypes.func,
};

export default Shows;
