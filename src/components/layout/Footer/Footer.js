import React from 'react';
import { Container, Title, Socials, ButtonContent } from './Footer.styles';
import shortid from 'shortid';

import Button from '../../common/Button/Button';
import styles from '../../common/Button/Button.module.scss';

import { links } from '../../../data/dbLinks';

const FooterBar = () => {
  return (
    <Container>
      <Title>WEBSTER2020</Title>
      <Socials>
        {links.map(elem => {
          return (
            <a 
              key={shortid.generate()} 
              href={elem.link} 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <Button link={true} className={styles.linkButton}>
                <ButtonContent>{elem.icon}</ButtonContent>
              </Button>
            </a>
          );
        })}
      </Socials>
    </Container>
  );
};

export default FooterBar;
