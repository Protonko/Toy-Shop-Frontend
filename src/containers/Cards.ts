import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as cartActions from 'store/actions/cart';
import {IAddToCart, IRemoveFromCart} from 'models/store/actions/cart';
import {IProduct} from 'models/interfaces';
import {Cards} from 'components/Card/Cards';

type TOwnProps = {
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
}

type TActions = {
  addToCart: (product: IProduct) => IAddToCart,
  removeFromCart: (product: IProduct) => IRemoveFromCart,
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(cartActions, dispatch),
});

export default connect<{}, TActions, TOwnProps>(null, mapDispatchToProps)(Cards);
