// types
import {TInitialState} from 'store/reducers/cart';
import {IProduct} from 'models/interfaces';

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as cartActions from 'store/actions/cart';
import {getTotalPrice} from 'store/selectors/cart';
import {Cart} from 'components/Cart/Cart';

type TActions = {
  removeFromCart: (item: IProduct) => void,
}

const mapStateToProps = ({cart}: {cart: TInitialState}) => ({
  items: cart.items,
  countProducts: cart.items.length,
  total: getTotalPrice(cart.items),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
