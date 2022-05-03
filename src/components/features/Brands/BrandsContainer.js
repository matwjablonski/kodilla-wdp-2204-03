import { connect } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';
import Brands from './Brands';

const mapStateToProps = state => ({
  brands: getAll(state),
});

export default connect(mapStateToProps)(Brands);
