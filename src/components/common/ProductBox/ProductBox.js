import React from 'react';
import PropTypes from 'prop-types';
import FavoritesButton from '../../features/FavoriteButton/FavoriteButton';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { randomNumberForImg } from '../../../utils/randomNumberForImg';
import StarRating from '../../features/StarRating/StarRating';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  isFavorite,
  addToCompare,
  userRating,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img alt={name} src={'/images/furniture/' + randomNumberForImg() + '.jpg'} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <StarRating stars={stars} userRating={userRating} id={id} />
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <FavoritesButton favorite={isFavorite} id={id} />
        <Button variant='outline' className={addToCompare ? styles.addToCompare : ''}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  addToCompare: PropTypes.bool,
  userRating: PropTypes.bool,
};

export default ProductBox;
