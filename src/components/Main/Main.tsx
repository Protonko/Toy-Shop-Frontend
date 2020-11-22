// types
import {IProduct} from 'models/interfaces';

import React, {FC, useCallback, useEffect} from 'react';
import {Loader} from 'components/Common/Loader';
import {Notification} from 'components/Common/Notification';
import Filter from 'containers/Filter';
import Cards from 'containers/Cards';

interface IMainProps {
  isLoaded: boolean,
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
  setProducts: () => void,
  setSearchQuery: (value: string) => void,
}

export const Main: FC<IMainProps> = ({
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
    if (!products.length) {
      fetchProducts();
    }

    return () => {
      resetSearchQuery();
    }
  }, [fetchProducts, resetSearchQuery]);

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
