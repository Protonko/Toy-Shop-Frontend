import React, {FC} from 'react';
import {Switch, Route} from 'react-router-dom';
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
import {ErrorBoundary} from 'components/ErrorBoundary/ErrorBoundary';

const App: FC = () => {
  return (
    <>
      <Header />

      <main className="page__content">
        <Container classNames="container page__content-wrapper">
          <Switch>
            <Route exact path="/">
              <ErrorBoundary>
                <Main />
              </ErrorBoundary>
            </Route>
            <Route exact path="/delivery">
              <ErrorBoundary>
                <Delivery />
              </ErrorBoundary>
            </Route>
            <Route exact path="/payment">
              <ErrorBoundary>
                <Payment />
              </ErrorBoundary>
            </Route>
            <Route exact path="/support">
              <ErrorBoundary>
                <Support />
              </ErrorBoundary>
            </Route>
            <Route exact path='/order'>
              <ErrorBoundary>
                <Order />
              </ErrorBoundary>
            </Route>
            <Route exact path='/product/:id'>
              <ErrorBoundary>
                <ProductDetailPage />
              </ErrorBoundary>
            </Route>
            <Route exact path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </Container>
      </main>

      <Footer/>
    </>
  );
};

export default App;

