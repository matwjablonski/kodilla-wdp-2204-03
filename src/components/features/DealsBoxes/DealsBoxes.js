import React from 'react';
import PropTypes from 'prop-types';

import styles from './DealsBoxes.module.scss';

const DealsBoxes = ({ deals }) => {
  const [firstDeal, secondDeal, thirdDeal] = [...deals];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.dealsContainer}>
          <div className={styles.leftDeal}>
            <img alt={firstDeal.firstId} src='/images/Deals/sofa.jpg' />
            <div className={styles.leftOverlay}>
              <div className={styles.leftDealText}>
                {firstDeal.deal.map(deal => (
                  <p key={deal}>{deal}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.upperRightDeal}>
            <div className={styles.upperDealText}>
              {secondDeal.deal.map(deal => (
                <p key={deal}>{deal}</p>
              ))}
            </div>
            <img alt={secondDeal.secondId} src='/images/Deals/chair.jpg' />
          </div>
          <div className={styles.lowerRightDeal}>
            <img alt={thirdDeal.thirdId} src='/images/Deals/bed.jpg' />
            <div className={styles.lowerDealText}>
              {thirdDeal.deal.map(deal => (
                <p key={deal}>{deal}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DealsBoxes.propTypes = {
  deals: PropTypes.array,
};

export default DealsBoxes;
