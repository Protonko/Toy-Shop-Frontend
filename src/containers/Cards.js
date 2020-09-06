import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from 'store/actions/cart';
import {Cards} from 'components/Card/Cards';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Cards);
