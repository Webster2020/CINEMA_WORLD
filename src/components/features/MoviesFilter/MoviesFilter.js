import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './MoviesFilter.module.scss';

import Button from '../../common/Button/Button';

const MoviesFilter = ({
  captions,
  types,
  years,
  selectTitleDispatch,
  selectTypeDispatch,
  selectYearDispatch,
}) => {

  const [clickedFilter, setClickedFilter] = useState(
    {
      captions: '',
      types: '',
      years: '',
    }
  );

  const clickHandler = (e, elem, argElem) => {
    e.preventDefault();
    setClickedFilter(
      {
        ...clickedFilter,
        [argElem]: elem,
      }
    );
    if (argElem === 'captions') {
      selectTitleDispatch(elem);
    } else if (argElem === 'types') {
      selectTypeDispatch(elem);
    } else if (argElem === 'years') {
      selectYearDispatch(elem);
    }
  };

  return (
    <section className={styles.moviesFilterWrapper}>
      <div className={styles.moviesFilter}>
        <h2 className={styles.moviesFilterTitle}>TITLES</h2>
        <ul className={styles.moviesFilterList}>
          <li className={styles.moviesFilterListElem}>
            <Button
              className={clickedFilter.captions === '' && styles.moviesFilterClicked}
              variant='small'
              onClick={e => clickHandler(e, '', 'captions')}
            >
              -- ALL TITLES --
            </Button>
          </li>
          {captions.map((caption) => (
            <li className={styles.moviesFilterListElem} key={shortid.generate()}>
              <Button
                className={clickedFilter.captions === caption && styles.moviesFilterClicked}
                key={shortid.generate()}
                variant='small'
                title={caption}
                onClick={e => clickHandler(e, caption, 'captions')}
              >
                {caption}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.moviesFilter}>
        <h2 className={styles.moviesFilterTitle}>TYPES</h2>
        <ul className={styles.moviesFilterList}>
          <li className={styles.moviesFilterListElem}>
            <Button
              className={clickedFilter.types === '' && styles.moviesFilterClicked}
              variant='small'
              onClick={e => clickHandler(e, '', 'types')}
            >
              -- ALL TYPES --
            </Button>
          </li>
          {types.map((type) => (
            <li className={styles.moviesFilterListElem} key={shortid.generate()}>
              <Button
                className={clickedFilter.types === type && styles.moviesFilterClicked}
                key={shortid.generate()}
                variant='small'
                type={type}
                onClick={e => clickHandler(e, type, 'types')}
              >
                {type}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.moviesFilter}>
        <h2 className={styles.moviesFilterTitle}>YEARS</h2>
        <ul className={styles.moviesFilterList}>
          <li className={styles.moviesFilterListElem}>
            <Button
              className={clickedFilter.years === '' && styles.moviesFilterClicked}
              variant='small'
              onClick={e => clickHandler(e, '', 'years')}
            >
              -- ALL YEARS --
            </Button>
          </li>
          {years.map((year) => (
            <li className={styles.moviesFilterListElem} key={shortid.generate()}>
              <Button
                className={clickedFilter.years === year && styles.moviesFilterClicked}
                key={shortid.generate()}
                variant='small'
                year={year}
                onClick={e => clickHandler(e, year, 'years')}
              >
                {year}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

MoviesFilter.propTypes = {
  captions: PropTypes.array,
  types: PropTypes.array,
  years: PropTypes.array,
  selectTitleDispatch: PropTypes.func,
  selectTypeDispatch: PropTypes.func,
  selectYearDispatch: PropTypes.func,
};

export default MoviesFilter;
