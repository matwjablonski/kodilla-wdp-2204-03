import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Slider from 'react-slick';
import './BrandsSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 511,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <div className={styles.root}>
        <div className='container brandsSlider'>
          <Slider {...settings}>
            {brands.map(brand => {
              return (
                <div key={brand.id.replace('brand-', '')} className={styles.sliderDiv}>
                  <img
                    key={brand.id.replace('brand-', '')}
                    src={`${process.env.PUBLIC_URL}/images/brands/${brand.id}.jpeg`}
                    alt='brand'
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
