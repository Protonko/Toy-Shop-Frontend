import React, {FC} from 'react';
import {IProduct} from 'models/interfaces';
import {Loader} from 'components/Common/Loader';
import {Notification} from 'components/Common/Notification';
import Filter from 'containers/Filter';
import Cards from 'containers/Cards';

interface IMainProps {
  isLoaded: boolean,
  products: Array<IProduct>,
  selectedProducts: Array<IProduct>,
}

export const Main: FC<IMainProps> = ({
  isLoaded,
  products,
  selectedProducts,
}) => {
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
