import React from 'react';
import PropTypes from 'prop-types';
import {Loader} from 'components/Common/Loader';
import {Cards} from 'components/Card/Cards';
import {Notification} from 'components/Common/Notification';
import Filter from 'containers/Filter';

export const Main = ({isLoaded, products, selectedProducts}) => {
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
}

Main.propTypes = {
  isLoaded: PropTypes.bool,
  products: PropTypes.array,
  selectedProducts: PropTypes.array,
};
