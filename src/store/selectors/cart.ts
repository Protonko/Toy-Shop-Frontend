// types
import {IProduct} from 'models/interfaces';

import {createSelector} from 'reselect';
import {priceFullReducer, saleReducer, totalPriceReducer} from 'utils/priceReducers';

const getProducts = (products: Array<IProduct>) => products;

const getSelectedItems = createSelector(
  getProducts,
  products => products.filter(item => item.checked === true),
);

export const getTotalPrice = createSelector(
  getProducts,
  products => getSelectedItems(products).reduce(totalPriceReducer, 0),
);

export const getSale = createSelector(
  getProducts,
  products => getSelectedItems(products).reduce(saleReducer, 0),
);

export const getFullPrice = createSelector(
  getProducts,
  products => getSelectedItems(products).reduce(priceFullReducer, 0),
);
