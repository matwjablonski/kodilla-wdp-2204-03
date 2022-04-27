import React from 'react';
import styles from './GaleryBox.module.scss';

const GaleryBox = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <p>left</p>
            <div className='container'>
              <div className='row'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
              </div>
              <div className={'row  ' + styles.tablist}>
                <div className='col pl-0 pr-0'>
                  <ul>
                    <li>
                      <a href='#'>Featured</a>
                    </li>
                    <li>
                      <a href='#'>Top Seller</a>
                    </li>
                    <li>
                      <a href='#'>Sale Off</a>
                    </li>
                    <li>
                      <a href='#'>Top Rated</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <p>right</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleryBox;
