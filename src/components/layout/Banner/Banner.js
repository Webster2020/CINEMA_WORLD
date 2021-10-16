import React from 'react';
import styles from './Banner.scss';
import { Carousel } from 'react-carousel-minimal';
import { movies } from '../../../data/dbMovies';

const Banner = () => {
  return (
    <section className={styles.bannerSliderWrapper}>
      <Carousel
        data={movies}
        time={5000}
        width='100%'
        height='495px'
        captionStyle={{ fontSize: '2em' }}
        radius='1px'
        slideNumber={false}
        slideNumberStyle={''}
        captionPosition='bottom'
        automatic={true}
        dots={false}
        pauseIconColor='white'
        pauseIconSize='60px'
        slideBackgroundColor='white'
        slideImageFit='cover'
        thumbnails={false}
        thumbnailWidth='100px'
      />
    </section>
  );
};

export default Banner;
