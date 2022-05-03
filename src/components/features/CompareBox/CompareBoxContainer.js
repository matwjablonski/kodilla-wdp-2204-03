import { connect } from 'react-redux';

import { getCompare, removeItem } from '../../../redux/productsRedux';
import CompareBox from './CompareBox.js';

const mapStateToProps = state => ({
  getCompare: getCompare(state),
});

const mapDispatcherToProps = dispatcher => ({
  removeItem: payload => dispatcher(removeItem(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(CompareBox);
