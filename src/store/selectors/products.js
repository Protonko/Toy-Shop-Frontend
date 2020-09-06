import {createSelector} from 'reselect';
import {filterProducts} from 'utils/filters';

const getProducts = state => state.products.items;
const getfilter = state => state.filter;

export const getFilteredProducts = createSelector(
  getProducts, getfilter,
  (products, filter) => {
    return products && filterProducts(products, filter.filterBy, filter.searchQuery)
  }
);
