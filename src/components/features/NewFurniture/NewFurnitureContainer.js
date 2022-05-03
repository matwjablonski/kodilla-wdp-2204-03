import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import {
  getNew,
  addToCompare,
  getCompare,
  removeFromCompare,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  getCompare: getCompare(state),
});

const mapDispatcherToProps = dispatcher => ({
  addToCompare: payload => dispatcher(addToCompare(payload)),
  removeFromCompare: payload => dispatcher(removeFromCompare(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(NewFurniture);
