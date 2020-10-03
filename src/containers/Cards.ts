import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as cartActions from 'store/actions/cart';
import {TActionsCart} from 'models/store/actions/cart';
import {Cards} from 'components/Card/Cards';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActionsCart, any>(cartActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Cards);
