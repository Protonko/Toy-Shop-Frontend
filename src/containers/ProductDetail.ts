//types
import {IImageThumbnails, IProduct, IProductDetail} from 'models/interfaces';
import {RootState} from 'store/reducers';

import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setImageThumbnails} from 'store/selectors/imageThumbnails';
import * as productActions from 'store/actions/products';
import * as cartActions from 'store/actions/cart';
import {ProductDetail} from 'components/ProductDetail/ProductDetail';

type TState = {
  detail: IProductDetail | null,
  isLoadedDetail: boolean,
  errorDetailMessage: null | string,
  images: Array<IImageThumbnails> | null,
  selectedProducts: Array<IProduct>,
}

type TActions = {
  getProductDetail: (id: number) => void,
  refreshDetail: () => void,
  addToCart: (product: IProduct) => void,
  removeFromCart: (product: IProduct) => void,
}

const mapStateToProps = ({cart, products}: RootState): TState => ({
  detail: products.detail,
  isLoadedDetail: products.isLoadedDetail,
  errorDetailMessage: products.errorDetailMessage,
  images: setImageThumbnails(products.detail),
  selectedProducts: cart.items,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(
    {...productActions, ...cartActions},
    dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
