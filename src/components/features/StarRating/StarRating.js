import React from 'react';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavoriteStar } from '../../../redux/productsRedux';

const StarRating = ({ id, stars, userRating }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [userStar, setUserStar] = useState(stars);
  const dispatch = useDispatch();

  const handleOver = i => {
    setMouseOver(true);
    setUserStar(i);
  };

  const handleLeave = () => {
    setMouseOver(false);
    setUserStar(stars);
  };

  const handleAdd = (id, i, e) => {
    e.preventDefault();
    setMouseOver(false);
    dispatch(addFavoriteStar({ id, i }));
  };

  const starActive = mouseOver ? userStar : stars;

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <button
          key={i}
          id={id}
          className={(userRating || mouseOver) && styles.userRating}
          onMouseOver={() => handleOver(i)}
          onMouseLeave={() => handleLeave()}
          onClick={e => handleAdd(id, i, e)}
        >
          {i <= starActive ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </button>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.bool,
};

export default StarRating;
