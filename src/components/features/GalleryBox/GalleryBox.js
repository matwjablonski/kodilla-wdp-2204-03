import React, { useState } from 'react';
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

const GaleryBox = () => {
  const products = useSelector(getAll);
  const links = ['Featured', 'Top Seller', 'Sale Off', 'Top Rated'];
  const [thumbnail, setThumbnail] = useState([1, 2, 3, 4, 5, 6]);
  const [activePosition, setActivePosition] = useState(1);
  const [activeLinks, setActiveLink] = useState(0);
  const [productsId, setProductsId] = useState(0);
  const [foto, setFoto] = useState(activeLinks + 1);
  const [fadeOutFoto, setFadeOutFoto] = useState(false);
  const [fadeInFoto, setFadeInFoto] = useState(false);
  const [fadeOutSlider, setFadeOutSlider] = useState(false);
  const [fadeInSlider, setFadeInSlider] = useState(false);

  const handleLink = (select, e) => {
    e.preventDefault();
    setFadeOutFoto(true);
    setFadeOutSlider(true);
    setTimeout(() => {
      setActiveLink(select);
      setProductsId(select);
      setFoto(select + 1);
      setFadeOutFoto(false);
      setFadeOutSlider(false);
      setFadeInSlider(true);
      setFadeInFoto(true);
    }, 250);
  };

  const handleThumbnail = (nr, e) => {
    e.preventDefault();
    setFadeOutFoto(true);
    setTimeout(() => {
      setFoto(nr);
      setProductsId(nr - 1);
      setFadeOutFoto(false);
      setFadeInFoto(true);
    }, 250);
  };

  const handleRight = e => {
    e.preventDefault();
    if (activePosition < 4) {
      setThumbnail(thumbnail.map(i => i + 6));
      let pos = activePosition;
      pos++;
      setActivePosition(pos);
    }
  };

  const handleLeft = e => {
    e.preventDefault();
    if (activePosition > 1) {
      setThumbnail(thumbnail.map(i => i - 6));
      let pos = activePosition;
      pos--;
      setActivePosition(pos);
    }
  };

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
                  <h3>FURNITURE GALLERY</h3>
                </div>
              </div>
              <div className={'row ' + styles.links}>
                {links.map(i => (
                  <div
                    key={i}
                    className={
                      links.indexOf(i) === activeLinks ? 'col ' + styles.active : 'col'
                    }
                  >
                    <a href='#' onClick={e => handleLink(links.indexOf(i), e)}>
                      {i}
                    </a>
                  </div>
                ))}
              </div>
              <div
                className={
                  'row ' + (fadeOutFoto ? styles.out : fadeInFoto ? styles.in : '')
                }
              >
                <div className={'col ' + styles.leftBoxFoto}>
                  <div className={styles.buttonContainer}>
                    <GalleryBoxButton
                      isFavorite={products[productsId].isFavorite}
                      addToCompare={products[productsId].addToCompare}
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
                      <h2 className={styles.price}>$ {products[productsId].price}</h2>
                      <h3 className={styles.priceOld}>
                        {products[productsId].oldPrice !== undefined
                          ? '$ ' + products[productsId].oldPrice
                          : ''}
                      </h3>
                    </div>
                    <h2 className={styles.name}>{products[productsId].name}</h2>
                    {[1, 2, 3, 4, 5].map(i => (
                      <a key={i} href='#'>
                        {i <= products[activeLinks].stars ? (
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
                  <img src={'images/furniture/' + foto + '.jpg'} alt={'Foto' + foto} />
                </div>
              </div>
              <div
                className={
                  'row ' + (fadeOutSlider ? styles.out : fadeInSlider ? styles.in : '')
                }
              >
                <div className='col p-0'>
                  <div className={styles.sliderContainer}>
                    <a href='#'>
                      <button onClick={e => handleLeft(e)}>
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
                      {thumbnail.map(i => (
                        <li key={i}>
                          <a href='#' onClick={e => handleThumbnail(i, e)}>
                            <img
                              className={productsId + 1 === i ? styles.imgActive : ''}
                              src={'/images/furniture/' + i + '.jpg'}
                              alt={'foto' + i}
                            ></img>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a href='#'>
                      <button onClick={e => handleRight(e)}>
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
