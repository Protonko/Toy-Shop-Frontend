import React from 'react';
import PropTypes from 'prop-types';
import {Loader} from 'components/Common/Loader';
import {Notification} from 'components/Common/Notification';
import Filter from 'containers/Filter';
import Cards from 'containers/Cards';

export const Main = ({isLoaded, products, selectedProducts}) => {
  if (isLoaded) {
    return (
      <>
        {products.length ? (
          <div className="page__content-main">
            <Cards products={products} selectedProducts={selectedProducts} />
          </div>
        ) : <Notification text="Nothing found" />}
        <Filter />
      </>
    )
  } else {
    return <Loader />;
  }
}

Main.propTypes = {
  isLoaded: PropTypes.bool,
  products: PropTypes.array,
  selectedProducts: PropTypes.array,
};
