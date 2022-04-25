import React from 'react';
import PropTypes from 'prop-types';

import styles from './DealsBoxes.module.scss';

const DealsBoxes = ({ deals }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.dealsContainer}>
          <div className={styles.leftDeal}>
            <img alt={deals.firstId} src='/images/Deals/sofa.jpg' />
            <div className={styles.leftOverlay}>
              <div className={styles.leftDealText}>
                <p>{deals.firstDealA}</p>
                <p>{deals.firstDealB}</p>
                <p>{deals.firstDealC}</p>
              </div>
            </div>
          </div>
          <div className={styles.upperRightDeal}>
            <div className={styles.upperDealText}>
              <p>{deals.secondDealA}</p>
              <p>{deals.secondDealB}</p>
              <p>{deals.secondDealC}</p>
              <p>{deals.secondDealD}</p>
            </div>
            <img alt={deals.secondId} src='/images/Deals/chair.jpg' />
          </div>
          <div className={styles.lowerRightDeal}>
            <img alt={deals.thirdId} src='/images/Deals/bed.jpg' />
            <div className={styles.lowerDealText}>
              <p>{deals.thirdDealA}</p>
              <p>{deals.thirdDealB}</p>
              <p>{deals.thirdDealC}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DealsBoxes.propTypes = {
  deals: PropTypes.object,
};

export default DealsBoxes;
