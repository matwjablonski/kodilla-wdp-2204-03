import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  hoverOn,
  children,
  variant,
  noHover,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  if (hoverOn) {
    classes.push(styles.hoverOn);
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  hoverOn: PropTypes.bool,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
