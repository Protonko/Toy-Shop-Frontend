// types
import {IProduct} from 'models/interfaces';

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
    case 'PRICE_LOW':
      return orderBy(products, 'price', 'ASC');
    case 'PRICE_HIGH':
      return orderBy(products, 'price', 'DESC');
    case 'CATEGORY':
      return orderBy(products, 'category', 'ASC');
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
