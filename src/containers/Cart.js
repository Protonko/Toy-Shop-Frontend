import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../store/actions/cart';
import {Cart} from '../components/Cart/Cart';

const setTotalPrice = products => products.reduce(priceReducer, 0);

const priceReducer = (total = 0, product) => {
  const productPrice = product.sale ? Math.round(product.price * product.sale) : product.price;

  return total + productPrice;
};

const mapStateToProps = ({cart}) => ({
  items: cart.items,
  countProducts: cart.items.length,
  total: setTotalPrice(cart.items),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
