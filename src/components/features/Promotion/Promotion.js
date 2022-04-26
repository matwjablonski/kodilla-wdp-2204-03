import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getAllPromotion } from '../../../redux/promotionRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

const Promotion = ({ isFavorite, compare, stars }) => {
  const promotion = useSelector(state => getAllPromotion(state));

  const [leftSite, rightSite] = [...promotion];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.borderLeftSite}>
              <div
                className={styles.leftSite}
                style={{
                  backgroundImage: `url('${leftSite.image}')`,
                }}
              >
                <div className={styles.slider}>
                  <h5>HOT DEALS</h5>
                  <div className={'col-auto ' + styles.dots}>
                    <ul className={styles.slick_dots}>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <Button variant='main'>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                    CART
                  </Button>
                </div>
              </div>
              <div className={styles.content}>
                <div className={'col-auto ' + styles.dots}>
                  <ul className={styles.slick_dots}>
                    <li>
                      <p>25 DAYS</p>
                    </li>
                    <li>
                      <p>10 &nbsp;HRS</p>
                    </li>
                    <li>
                      <p>45 MINS</p>
                    </li>
                    <li>
                      <p>30 SECS</p>
                    </li>
                  </ul>
                </div>
                <h5>{leftSite.name}</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outline' isfavorite={isFavorite}>
                    <FontAwesomeIcon icon={faEye}>See more</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' isfavorite={isFavorite}>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' compare={compare}>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.price}>
                  <div className={styles.oldPrice}>{leftSite.oldPrice}</div>
                  <Button noHover variant='small'>
                    {' '}
                    $ {leftSite.price}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div
              className={styles.rightSite}
              style={{
                backgroundImage: `url('${rightSite.image}')`,
              }}
            >
              <div className={styles.rightContent}>
                <h2 className={styles.name}> {rightSite.name}</h2>
                <h2 className={styles.name2}>{rightSite.name2}</h2>
                <h4 className={styles.description}> {rightSite.description} </h4>
                <Button variant='main' className={styles.button_shopNow}>
                  shop now
                </Button>
              </div>
              <div className={styles.button_right_left}>
                <button className='col-6'>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className='col-6'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promotion.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  name2: PropTypes.string,
  description: PropTypes.string,
  oldPrice: PropTypes.string,
  price: PropTypes.string,
  isFavorite: PropTypes.bool,
  compare: PropTypes.bool,
  image: PropTypes.string,
  stars: PropTypes.number,
};

export default Promotion;
