import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Hour.scss';
import Button from '../Button/Button';

const Hour = ({ hour, movie, onClick }) => {
  return (
    <div className={styles.hour}>
      <Button onClick={(e) => onClick(e, hour, movie)}>
        <Link to='/tickets' style={{ textDecoration: 'none', color: 'white' }}>
          {hour}
        </Link>
      </Button>
    </div>
  );
};

Hour.propTypes = {
  hour: PropTypes.array,
  movie: PropTypes.object,
  onClick: PropTypes.func,
};

export default Hour;
