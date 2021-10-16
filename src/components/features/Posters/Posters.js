import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './Posters.module.scss';

import Poster from '../../common/Poster/Poster';
import Info from '../../common/Info/Info';
import Shows from '../Shows/ShowsContainer';

const Posters = ({ filteredMovies, filteredHours, variant }) => {
  return (
    <section>
      {filteredMovies.length !== 0 ? (
        <div
          className={
            variant === 'home' ? styles.postersWrapper_Home : styles.postersWrapper_Movies
          }
        >
          {filteredMovies.map((movie) => (
            <div
              key={shortid.generate()}
              className={variant === 'movies' && styles.postersContainer}
            >
              <Poster key={shortid.generate()} variant={variant} {...movie} />
              {variant === 'movies' && (
                <Shows
                  key={shortid.generate()}
                  hours={filteredHours[movie.id - 1]}
                  movie={movie.caption}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <Info>NO MOVIE FITS ...</Info>
      )}
    </section>
  );
};

Posters.propTypes = {
  filteredMovies: PropTypes.array,
  filteredHours: PropTypes.array,
  variant: PropTypes.string,
};

export default Posters;
