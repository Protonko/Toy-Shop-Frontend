import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {orderBy} from '../utils/orderBy';
import * as productsActions from '../store/actions/products';
import * as filterActions from '../store/actions/filter';
import {Loader} from '../components/Common/Loader';
import {Cards} from '../components/Card/Cards';
import {Notification} from '../components/Common/Notification';
import Filter from '../containers/Filter';

const filterProducts = (products, filterBy, searchQuery) =>
  sortProducts(searchProducts(products, searchQuery), filterBy);

const sortProducts = (products, filterBy) => {
  switch (filterBy.toUpperCase()) {
    case 'PRICE_LOW':
      return orderBy(products, 'price', 'ASC');
    case 'PRICE_HIGH':
      return orderBy(products, 'price', 'DESC');
    case 'CATEGORY':
      return orderBy(products, 'category', 'ASC');
    default:
      return products;
  }
};

const searchProducts = (products, searchQuery) => {
  let searchQueryValue = searchQuery.toLowerCase();

  return products.filter(product => {
    const productTitle = product.title.toLowerCase();

    return productTitle.indexOf(searchQueryValue) >= 0;
  });
};

const mapStateToProps = ({products, filter, cart}) => ({
  selectedProducts: cart.items,
  products:
    products.items &&
    filterProducts(products.items, filter.filterBy, filter.searchQuery),
  isLoaded: products.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {...productsActions, ...filterActions},
    dispatch),
});

const Main = ({isLoaded, products, selectedProducts, setProducts, setSearchQuery}) => {
  useEffect(() => {
    setProducts();

    return () => {
      setSearchQuery('');
    }
  }, []);

  return (
    <>
      {!isLoaded
        ? <Loader />
        : (
          <>
            {products.length ? (
              <div className="page__content-main">
                <Cards products={products} selectedProducts={selectedProducts} />
              </div>
            ) : <Notification text="Nothing found" />}
            <Filter />
          </>
        )
      }
    </>
  )
};

Main.propTypes = {
  isLoaded: PropTypes.bool,
  products: PropTypes.object,
  selectedProducts: PropTypes.array,
  setProducts: PropTypes.func,
  setSearchQuery: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
