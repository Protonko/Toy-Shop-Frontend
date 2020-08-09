import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../store/actions/products';
import {orderBy} from '../utils/orderBy';
import {Header} from '../components/Header/Header';
import {Main} from '../pages/Main';
import {Footer} from '../components/Footer';

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

const mapStateToProps = ({products, filter}) => ({
  products:
    products.items &&
    filterProducts(products.items, filter.filterBy, filter.searchQuery),
  isLoaded: products.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch),
});

const App = (props) => {
  useEffect(props.setProducts, []);

  return (
    <>
      <Header/>
      <Main {...props} />
      <Footer/>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

