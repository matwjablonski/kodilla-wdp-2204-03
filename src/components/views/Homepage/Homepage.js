import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import GalleryBox from '../../features/GalleryBox/GalleryBox';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <GalleryBox />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
