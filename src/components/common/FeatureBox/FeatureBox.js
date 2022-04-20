import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ icon, children, page }) => (
  <Link to={page}>
    <div className={styles.root}>
      {icon && (
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  </Link>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  page: PropTypes.string,
};

export default FeatureBox;
