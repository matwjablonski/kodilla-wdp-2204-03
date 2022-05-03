import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faShoppingBasket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import styles from './GalleryBoxButton.module.scss';

const GalleryBoxButton = ({ isFavorite, addToCompare }) => {
  return (
    <>
      <div className={styles.item + ' ' + styles.tooltip}>
        <Button variant='outline' className={isFavorite ? styles.active : ''}>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}>Add to favorite</span>
      </div>
      <div className={styles.item + ' ' + styles.tooltip}>
        <Button variant='outline' className={addToCompare ? styles.active : ''}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}>Add to compare</span>
      </div>
      <div className={styles.item + ' ' + styles.tooltip}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>Watch</FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}>Add to watch</span>
      </div>
      <div className={styles.item + ' ' + styles.tooltip}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faShoppingBasket}>Shopping cart</FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}>Add to cart</span>
      </div>
    </>
  );
};

GalleryBoxButton.propTypes = {
  isFavorite: PropTypes.bool,
  addToCompare: PropTypes.bool,
};

export default GalleryBoxButton;
