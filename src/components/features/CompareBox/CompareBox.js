import React from 'react';
import Button from '../../common/Button/Button';
import styles from './CompareBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const CompareBox = ({ getCompare, removeItem }) => {
  const isActive = getCompare.length;

  if (isActive) {
    return (
      <div className={styles.root}>
        {getCompare.map(product => (
          <div
            key={product.id}
            className={styles.box}
            onClick={() => removeItem(product.id)}
          >
            <div className={styles.description}>
              <h6>{product.name}</h6>
              <p>Price: $ {product.price} </p>
            </div>
            <div className={styles.close}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
        ))}
        <Button className={styles.button}>Compare</Button>
      </div>
    );
  }
  return null;
};

CompareBox.propTypes = {
  id: PropTypes.string,
  price: PropTypes.string,
  getCompare: PropTypes.func,
  removeItem: PropTypes.func,
};
export default CompareBox;
