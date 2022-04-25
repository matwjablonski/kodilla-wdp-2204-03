import { connect } from 'react-redux';

import DealsBoxes from './DealsBoxes';

const mapStateToProps = state => ({
  deals: state.deals,
});

export default connect(mapStateToProps)(DealsBoxes);
