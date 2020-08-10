import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../store/actions/products';
import {orderBy} from '../utils/orderBy';
import {Main} from '../pages/Main';
import {Delivery} from '../pages/Delivery';
import {ErrorPage} from '../pages/ErrorPage';
import {Header} from '../components/Header/Header';
import {Footer} from '../components/Footer/Footer';
import {Container} from '../components/Common/Container';
import {Support} from '../pages/Support';
import {Payment} from '../pages/Payment';

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
    <Router>
      <Header/>

      <main className="page__content">
        <Container classNames="container page__content-wrapper">
          <Switch>
            <Route exact path="/">
              <Main {...props} />
            </Route>
            <Route exact path="/delivery">
              <Delivery />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/support">
              <Support />
            </Route>
            <Route exact path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </Container>
      </main>

      <Footer/>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

