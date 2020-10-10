import {TInitialState} from 'store/reducers/cart';

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as cartActions from 'store/actions/cart';
import * as cartSelectors from 'store/selectors/cart';
import {OrderForm} from 'components/OrderForm/OrderForm';

type TActions = {
  toggleSelectProduct: (id: number | string) => void,
  deleteSelected: () => void,
}

const mapStateToProps = ({cart}: {cart: TInitialState}) => ({
  cartItems: cart.items,
  sale: cartSelectors.getSale(cart.items),
  fullPrice: cartSelectors.getFullPrice(cart.items),
  total: cartSelectors.getTotalPrice(cart.items),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
