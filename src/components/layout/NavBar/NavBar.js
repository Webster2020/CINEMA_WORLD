import React from 'react';
import styles from './NavBar.scss';
import Logo from '../../common/Logo/Logo';
import Menu from '../../features/Menu/Menu';
import { Grid, Row, Col } from 'react-flexbox-grid';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <Grid fluid>
        <Row middle='xs' between='xs'>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Logo />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Menu />
          </Col>
        </Row>
      </Grid>
    </nav>
  );
};

export default NavBar;
