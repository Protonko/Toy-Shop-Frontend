import {orderBy} from './orderBy';

export const filterProducts = (products, filterBy, searchQuery) =>
  sortProducts(searchProducts(products, searchQuery), filterBy);

const sortProducts = (products, filterBy) => {
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

const searchProducts = (products, searchQuery) => {
  let searchQueryValue = searchQuery.toLowerCase();

  return products.filter(product => {
    const productTitle = product.title.toLowerCase();

    return productTitle.indexOf(searchQueryValue) >= 0;
  });
};
