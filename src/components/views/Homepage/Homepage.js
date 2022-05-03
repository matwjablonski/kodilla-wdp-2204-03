import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promotion from '../../features/Promotion/Promotion';
import DealsBoxes from '../../features/DealsBoxes/DealsBoxesContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promotion />
    <FeatureBoxes />
    <DealsBoxes />
    <NewFurniture />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
