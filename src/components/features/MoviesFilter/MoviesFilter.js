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

  const [clickedTitle, setClickedTitle] = useState('');
  const [clickedType, setClickedType] = useState('');
  const [clickedYear, setClickedYear] = useState('');

  const clickHandler = (e, elem, argElem) => {
    e.preventDefault();
    if (argElem === 'caption') {
      setClickedTitle(elem);
      selectTitleDispatch(elem);
    } else if (argElem === 'type') {
      setClickedType(elem);
      selectTypeDispatch(elem);
    } else if (argElem === 'year') {
      setClickedYear(elem);
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
              className={clickedTitle === '' && styles.moviesFilterClicked}
              variant='small'
              onClick={e => clickHandler(e, '', 'caption')}
            >
              -- ALL TITLES --
            </Button>
          </li>
          {captions.map((caption) => (
            <li className={styles.moviesFilterListElem} key={shortid.generate()}>
              <Button
                className={clickedTitle === caption && styles.moviesFilterClicked}
                key={shortid.generate()}
                variant='small'
                title={caption}
                onClick={e => clickHandler(e, caption, 'caption')}
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
              className={clickedType === '' && styles.moviesFilterClicked}
              variant='small'
              onClick={e => clickHandler(e, '', 'type')}
            >
              -- ALL TYPES --
            </Button>
          </li>
          {types.map((type) => (
            <li className={styles.moviesFilterListElem} key={shortid.generate()}>
              <Button
                className={clickedType === type && styles.moviesFilterClicked}
                key={shortid.generate()}
                variant='small'
                type={type}
                onClick={e => clickHandler(e, type, 'type')}
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
              className={clickedYear === '' && styles.moviesFilterClicked}
              variant='small'
              onClick={e => clickHandler(e, '', 'year')}
            >
              -- ALL YEARS --
            </Button>
          </li>
          {years.map((year) => (
            <li className={styles.moviesFilterListElem} key={shortid.generate()}>
              <Button
                className={clickedYear === year && styles.moviesFilterClicked}
                key={shortid.generate()}
                variant='small'
                year={year}
                onClick={e => clickHandler(e, year, 'year')}
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
