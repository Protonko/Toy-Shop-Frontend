// types
import {IProduct} from 'models/interfaces';
import {FILTER_TYPES, ORDER_BY} from 'models/enums';

import {orderBy} from './orderBy';

export const filterProducts = (
  products: Array<IProduct>,
  filterBy: string,
  searchQuery: string
) =>
  sortProducts(searchProducts(products, searchQuery), filterBy);

const sortProducts = (
  products: Array<IProduct>,
  filterBy: string,
) => {
  switch (filterBy.toUpperCase()) {
    case FILTER_TYPES.PRICE_LOW:
      return orderBy(products, 'price', ORDER_BY.ASC);
    case FILTER_TYPES.PRICE_HIGH:
      return orderBy(products, 'price', ORDER_BY.DESC);
    case FILTER_TYPES.CATEGORY:
      return orderBy(products, 'category', ORDER_BY.ASC);
    default:
      return products;
  }
};

const searchProducts = (
  products: Array<IProduct>,
  searchQuery: string,
) => {
  let searchQueryValue = searchQuery.toLowerCase();

  return products.filter(product => {
    const productTitle = product.title.toLowerCase();

    return productTitle.indexOf(searchQueryValue) >= 0;
  });
};
