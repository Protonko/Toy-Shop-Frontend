import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from 'store/actions/cart';
import {getTotalPrice} from 'store/selectors/cart';
import {Cart} from 'components/Cart/Cart';

const mapStateToProps = ({cart}) => ({
  items: cart.items,
  countProducts: cart.items.length,
  total: getTotalPrice(cart.items),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
