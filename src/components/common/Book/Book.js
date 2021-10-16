import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Book.module.scss';

import Button from '../Button/Button';

const Book = ({ onClick, text }) => {
  return (
    <div className={styles.book}>
      <Link to='/confirm' style={{ textDecoration: 'none' }}>
        <Button onClick={(e) => onClick(e)}>{text}</Button>
      </Link>
    </div>
  );
};

Book.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Book;
