import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../containers/Filter';
import {Container} from '../components/Common/Container';
import {Loader} from '../components/Common/Loader';
import {Cards} from '../components/Cards';

export const Main = ({isLoaded, products}) => {
  return (
    <main className="page__content">
      <Container classNames="container page__content-wrapper">
        {!isLoaded
          ? <Loader/>
          : (
            <>
              <div className="page__content-main">
                <Cards products={products} />
              </div>
              <Filter/>
            </>
          )
        }
      </Container>
    </main>
  );
}

Main.propTypes = {
  isLoaded: PropTypes.bool,
  products: PropTypes.array,
};
