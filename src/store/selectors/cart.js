import {createSelector} from 'reselect';
import {priceFullReducer, saleReducer, totalPriceReducer} from 'utils/priceReducers';

const getProducts = products => products;

export const getTotalPrice = createSelector(
  [getProducts],
  products => products.reduce(totalPriceReducer, 0),
);

export const getSale = createSelector(
  [getProducts],
  products => products.reduce(saleReducer, 0),
);

export const getFullPrice = createSelector(
  [getProducts],
  products => products.reduce(priceFullReducer, 0),
);
