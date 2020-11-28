// types
import {IProduct} from 'models/interfaces';
import {RootState} from 'store/reducers';
import {TErrorMessage} from 'models/types';

import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import * as productsActions from 'store/actions/products';
import * as filterActions from 'store/actions/filter';
import {getFilteredProducts} from 'store/selectors/products';
import {Main} from 'components/Main/Main';

type TState = {
  isLoaded: boolean,
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
  page: number,
  errorMessage: TErrorMessage,
}

type TActions = {
  setProducts: () => void,
  setSearchQuery: (value: string) => void,
}

const mapStateToProps = ({products, filter, cart}: RootState): TState => ({
  selectedProducts: cart.items,
  products: getFilteredProducts({products, filter}),
  isLoaded: products.isLoaded,
  page: products.page,
  errorMessage: products.errorMessage
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(
    {...productsActions, ...filterActions},
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
