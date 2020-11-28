// types
import {IProduct} from 'models/interfaces';

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as cartActions from 'store/actions/cart';
import {Cards} from 'components/Card/Cards';

type TOwnProps = {
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
}

type TActions = {
  addToCart: (product: IProduct) => void,
  removeFromCart: (product: IProduct) => void,
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(cartActions, dispatch),
});

export default connect<{}, TActions, TOwnProps>(null, mapDispatchToProps)(Cards);
