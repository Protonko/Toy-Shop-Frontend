import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Main} from 'pages/Main';
import {Delivery} from 'pages/Delivery';
import {ErrorPage} from 'pages/ErrorPage';
import {Support} from 'pages/Support';
import {Payment} from 'pages/Payment';
import {Order} from 'pages/Order';
import {ProductDetailPage} from 'pages/ProductDetailPage';
import {Header} from 'components/Header/Header';
import {Footer} from 'components/Footer/Footer';
import {Container} from 'components/Common/Container';

const App = () => {
  return (
    <Router>
      <Header />

      <main className="page__content">
        <Container classNames="container page__content-wrapper">
          <Switch>
            <Route exact path="/">
              <Main />
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
            <Route exact path='/order'>
              <Order />
            </Route>
            <Route exact path='/product/:id'>
              <ProductDetailPage />
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

export default App;

