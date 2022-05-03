import React from 'react';
import GalleryBoxButton from '../GalleryBoxButton/GalleryBoxButton';
import styles from './GalleryBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { randomNumberForImg } from '../../../utils/randomNumberForImg';

const GaleryBox = () => {
  const products = useSelector(getAll);
  const id = 0;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-6 ' + styles.leftContainer}>
            <div className='container'>
              <div className='row'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
              </div>
              <div className={'row ' + styles.links}>
                <div className='col'>
                  <a href='#'>Featured</a>
                </div>
                <div className={'col ' + styles.active}>
                  <a href='#'>Top Seller</a>
                </div>
                <div className='col'>
                  <a href='#'>Sale Off</a>
                </div>
                <div className='col'>
                  <a href='#'>Top Rated</a>
                </div>
              </div>
              <div className='row'>
                <div className={'col ' + styles.leftBoxFoto}>
                  <div className={styles.buttonContainer}>
                    <GalleryBoxButton
                      isFavorite={products[id].isFavorite}
                      addToCompare={products[id].addToCompare}
                    />
                  </div>
                  <div className={styles.priceBox}>
                    <div className={styles.triangleTopLeft}></div>
                    <div className={styles.triangleBottomRight}></div>
                    <div className={styles.priceCircle}>
                      <h2 className={styles.price}>$ {products[id].price}</h2>
                      <h3 className={styles.priceOld}>
                        {products[id].oldPrice !== undefined
                          ? '$ ' + products[id].oldPrice
                          : ''}
                      </h3>
                    </div>
                    <h2 className={styles.name}>{products[id].name}</h2>
                    {[1, 2, 3, 4, 5].map(i => (
                      <a key={i} href='#'>
                        {i <= products[id].stars ? (
                          <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                        )}
                      </a>
                    ))}
                  </div>
                  <img src='images/furniture/1.jpg' alt='Foto1' />
                </div>
              </div>
              <div className='row'>
                <div className='col p-0'>
                  <div className={styles.sliderContainer}>
                    <a href='#'>
                      <button>
                        <FontAwesomeIcon icon={faChevronLeft}>left</FontAwesomeIcon>
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href='#'>
                          <img
                            className={styles.imgActive}
                            src={'/images/furniture/' + randomNumberForImg() + '.jpg'}
                            alt='foto1'
                          ></img>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src={'/images/furniture/' + randomNumberForImg() + '.jpg'}
                            alt='foto2'
                          ></img>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src={'/images/furniture/' + randomNumberForImg() + '.jpg'}
                            alt='foto3'
                          ></img>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src={'/images/furniture/' + randomNumberForImg() + '.jpg'}
                            alt='foto4'
                          ></img>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src={'/images/furniture/' + randomNumberForImg() + '.jpg'}
                            alt='foto5'
                          ></img>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src={'/images/furniture/' + randomNumberForImg() + '.jpg'}
                            alt='foto6'
                          ></img>
                        </a>
                      </li>
                    </ul>
                    <a href='#'>
                      <button>
                        <FontAwesomeIcon icon={faChevronRight}>right</FontAwesomeIcon>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-6 ' + styles.rightContainer}>
            <img src='images/furniture/4.jpg' alt='fotoright' />
            <div className={styles.text}>
              <p className={styles.price}>
                From <span>50.80$</span>
              </p>
              <p className={styles.furniture}>Bedroom Bed</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GaleryBox.propTypes = {
  name: PropTypes.string,
};

export default GaleryBox;
