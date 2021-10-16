import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import Button from '../../common/Button/Button';

const Menu = () => {
  
  const views = ['', 'movies', 'tickets'];
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <ul className={styles.menuWrapper}>
      {views.map((view) => {
        return (
          <li 
            key={shortid.generate()} 
            className={`${styles.menuButton} ${menuActive && styles.menuActive}`}
          >
            <Link to={'/' + view} style={{ textDecoration: 'none' }}>
              <Button>{view === '' ? 'HOME' : view.toUpperCase()}</Button>
            </Link>
          </li>
        );
      })}
      <li 
        className={`${styles.menuButton} ${styles.menuActive}`} 
        onClick={() => showMenu()}
      >
        <Button>MENU</Button>
      </li>
    </ul>
  );
};

export default Menu;
