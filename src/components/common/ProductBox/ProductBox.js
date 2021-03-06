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
  name,
  price,
  promo,
  stars,
  compare,
  handleCompareClick,
  id,
  isFavorite,
  addToCompare,
  userRating,
  oldPrice,
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
        <Button
          className={compare ? styles.selected : styles.state}
          onClick={() => handleCompareClick(id, compare)}
          variant='outline'
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
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
  id: PropTypes.string,
  compare: PropTypes.bool,
  handleCompareClick: PropTypes.func,
  isFavorite: PropTypes.bool,
  addToCompare: PropTypes.bool,
  userRating: PropTypes.bool,
  oldPrice: PropTypes.number,
};

export default ProductBox;
