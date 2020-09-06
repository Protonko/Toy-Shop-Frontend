import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from 'store/actions/order';
import {getTotalPrice, getSale, getFullPrice} from 'store/selectors/cart';
import {OrderForm} from 'components/OrderForm/OrderForm';

const mapStateToProps = ({cart}) => ({
  cartItems: cart.items,
  sale: getSale(cart.items),
  fullPrice: getFullPrice(cart.items),
  total: getTotalPrice(cart.items),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
