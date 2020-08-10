import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../containers/Filter';
import {Loader} from '../components/Common/Loader';
import {Cards} from '../components/Card/Cards';

export const Main = ({isLoaded, products}) => {
  return (
    <>
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
    </>
  )
};

Main.propTypes = {
  isLoaded: PropTypes.bool,
  products: PropTypes.array,
};
