import { connect } from 'react-redux';

import DealsBoxes from './DealsBoxes';

import { getAllDeals } from '../../../redux/dealsRedux';

const mapStateToProps = state => ({
  deals: getAllDeals(state),
});

export default connect(mapStateToProps)(DealsBoxes);
