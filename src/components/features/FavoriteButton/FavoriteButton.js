import Button from '../../common/Button/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './FavoriteButton.module.scss';
import { useDispatch } from 'react-redux';
import { triggerFavorite } from '../../../redux/productsRedux';
import PropTypes from 'prop-types';

const FavoritesButton = ({ favorite, id }) => {
  const dispatch = useDispatch();

  const handleClickFavorite = (id, e) => {
    e.preventDefault();
    dispatch(triggerFavorite(id));
  };

  return (
    <Button
      variant='outline'
      onClick={e => handleClickFavorite(id, e)}
      className={favorite && styles.favorite}
    >
      <FontAwesomeIcon icon={faHeart}>Add to compare</FontAwesomeIcon>
    </Button>
  );
};

FavoritesButton.propTypes = {
  favorite: PropTypes.bool,
  id: PropTypes.string,
};

export default FavoritesButton;
