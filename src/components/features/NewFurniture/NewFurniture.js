import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    viewportWidth: window.innerWidth,
    desktop: false,
    tablet: false,
    mobile: false,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  componentDidMount() {
    this.updateViewportWidth();
    window.addEventListener('resize', this.updateViewportWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportWidth);
  }

  updateViewportWidth() {
    this.updateViewportWidth = this.updateViewportWidth.bind(this);
    this.setState({ viewportWidth: window.innerWidth });
    this.handleUpdateWidth();
  }

  handleUpdateWidth() {
    const viewportWidth = this.state.viewportWidth;
    const largeBreakpointSize = 992;
    const mediumBreakpointSize = 768;
    const smallBreakpointSize = 568;

    if (viewportWidth >= largeBreakpointSize) {
      this.setState({ desktop: true, tablet: false, mobile: false });
    } else if (
      this.state.viewportWidth >= mediumBreakpointSize &&
      viewportWidth < largeBreakpointSize
    ) {
      this.setState({ desktop: false, tablet: true, mobile: false });
    } else if (
      viewportWidth >= smallBreakpointSize &&
      viewportWidth < mediumBreakpointSize
    ) {
      this.setState({ desktop: false, tablet: false, mobile: true });
    }
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, desktop, tablet, mobile } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div
                key={item.id}
                className={
                  desktop ? 'col-3' : tablet ? 'col-6' : mobile ? 'col-12' : ''
                }
              >
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
