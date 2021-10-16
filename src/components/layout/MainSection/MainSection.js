import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainSection.module.scss';
import { Row, Col } from 'react-flexbox-grid';
import Posters from '../../features/Posters/PostersContainer';
import MoviesFilter from '../../features/MoviesFilter/MoviesFilterContainer';
import Days from '../../features/Days/DaysContainer';
import Room from '../../features/Room/Room';
import Form from '../../features/Form/FormContainer';
import ConfirmData from '../../features/ConfirmData/ConfirmDataContainer';

const MainSection = ({ variant }) => {
  return (
    <div className={styles.mainSectionContainer}>
      {variant === 'home' && (
        <Row around='xs'>
          <Col xs={12} md={3}>
            <MoviesFilter />
          </Col>
          <Col xs={12} md={9}>
            <Posters variant={'home'} />
          </Col>
        </Row>
      )}
      {variant === 'movies' && (
        <Row around='xs'>
          <Col xs={12} md={12}>
            <Days />
          </Col>
          <Col xs={12} md={12}>
            <Posters variant={'movies'} />
          </Col>
        </Row>
      )}
      {variant === 'tickets' && (
        <div>
          <Row around='xs'>
            <Col xs={12} lg={6}>
              <Room />
            </Col>
            <Col xs={12} lg={6}>
              <Form />
            </Col>
          </Row>
        </div>
      )}
      {variant === 'confirm' && (
        <div>
          <Row around='xs'>
            <Col xs={12}>
              <ConfirmData />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

MainSection.propTypes = {
  variant: PropTypes.string,
};

export default MainSection;

// https://roylee0704.github.io/react-flexbox-grid/
// https://www.npmjs.com/package/react-flexbox-grid
// https://www.redbitdev.com/post/getting-started-with-react-flexbox-grid
