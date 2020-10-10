import {IProduct} from 'models/interfaces';
import {TMerge} from 'models/types';

import React, {FC, useEffect, useCallback} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import * as productsActions from 'store/actions/products';
import * as filterActions from 'store/actions/filter';
import {getFilteredProducts} from 'store/selectors/products';
import {Main} from 'components/Main/Main';
import {RootState} from 'store/reducers';

type TState = {
  isLoaded: boolean,
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
}

type TActions = {
  setProducts: () => void,
  setSearchQuery: (value: string) => void,
}

const mapStateToProps = ({products, filter, cart}: RootState): TState => ({
  selectedProducts: cart.items,
  products: getFilteredProducts({products, filter}),
  isLoaded: products.isLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(
    {...productsActions, ...filterActions},
    dispatch
  ),
});

const MainContainer: FC<TMerge<TState, TActions>> = ({
  isLoaded,
  products,
  selectedProducts,
  setProducts,
  setSearchQuery,
}) => {
  const fetchProducts = useCallback(() => {
    setProducts();
  }, [setProducts]);

  const resetSearchQuery = useCallback(() => {
    setSearchQuery('');
  }, [setSearchQuery])

  useEffect(() => {
    fetchProducts();

    return () => {
      resetSearchQuery();
    }
  }, [fetchProducts, resetSearchQuery]);

  return (
    <Main
      isLoaded={isLoaded}
      products={products}
      selectedProducts={selectedProducts}
    />
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
