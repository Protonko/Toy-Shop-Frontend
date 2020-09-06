import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from 'store/actions/order';
import * as cartActions from 'store/actions/cart';
import * as cartSelectors from 'store/selectors/cart';
import {OrderForm} from 'components/OrderForm/OrderForm';

const mapStateToProps = ({cart}) => ({
  cartItems: cart.items,
  sale: cartSelectors.getSale(cart.items),
  fullPrice: cartSelectors.getFullPrice(cart.items),
  total: cartSelectors.getTotalPrice(cart.items),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {...orderActions, ...cartActions},
    dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
