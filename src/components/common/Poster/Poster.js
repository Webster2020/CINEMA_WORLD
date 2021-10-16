import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.scss';

const Poster = ({ variant, caption, image, type, year }) => {
  return (
    <article className={variant === 'home' ? styles.poster_Home : styles.poster_Movies}>
      <h2
        className={
          variant === 'home' ? styles.posterTitle_Home : styles.posterTitle_Movies
        }
      >
        {caption}
      </h2>
      <img
        className={
          variant === 'home' ? styles.posterImage_Home : styles.posterImage_Movies
        }
        src={image}
        alt={`poster_${caption}`}
      />
      <h3
        className={variant === 'home' ? styles.posterInfo_Home : styles.posterInfo_Movies}
      >
        {type}
      </h3>
      <h3
        className={variant === 'home' ? styles.posterInfo_Home : styles.posterInfo_Movies}
      >
        {year}
      </h3>
    </article>
  );
};

Poster.propTypes = {
  variant: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.number,
};

export default Poster;
