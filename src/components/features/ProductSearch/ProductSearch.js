import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  const selects = [
    { id: 1, name: 'Bad' },
    { id: 2, name: 'Sofa' },
    { id: 3, name: 'Chair' },
    { id: 4, name: 'Dining' },
    { id: 5, name: 'Table' },
  ];

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <div className={styles.selectField}>
          <ul key={selects.id}>
            <li>
              Select a category
              <ul>
                {selects.map(select => (
                  <li key={select.id}>{select.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
