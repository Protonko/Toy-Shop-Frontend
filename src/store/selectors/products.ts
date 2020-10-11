// types
import {RootState} from 'store/reducers';
import {TInitialState as TFilterState} from 'store/reducers/filter';
import {IProduct} from 'models/interfaces';

type TProductsState = Pick<RootState, 'products'>

import {createSelector} from 'reselect';
import {filterProducts} from 'utils/filters';

const getProducts = ({products}: TProductsState): Array<IProduct> => products.items;
const getfilter = ({filter}: {filter: TFilterState}): TFilterState => filter;

export const getFilteredProducts = createSelector(
  [getProducts, getfilter],
  (products, filter) => {
    return products && filterProducts(products, filter.filterBy, filter.searchQuery)
  }
);
