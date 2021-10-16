import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  link,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (variant) classes.push(styles[variant]); 
  else classes.push(styles.main);

  let Comp = 'a';
  if (link) Comp = 'button';

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  link: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
