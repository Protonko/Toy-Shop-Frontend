import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as productsActions from 'store/actions/products';
import * as filterActions from 'store/actions/filter';
import {getFilteredProducts} from 'store/selectors/products';
import {Main} from 'components/Main/Main';

const mapStateToProps = ({products, filter, cart}) => ({
  selectedProducts: cart.items,
  products: getFilteredProducts({products, filter}),
  isLoaded: products.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {...productsActions, ...filterActions},
    dispatch),
});

const MainContainer = ({
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

Main.propTypes = {
  isLoaded: PropTypes.bool,
  products: PropTypes.array,
  selectedProducts: PropTypes.array,
  setProducts: PropTypes.func,
  setSearchQuery: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
