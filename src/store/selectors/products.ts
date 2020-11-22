// types
import {RootState} from 'store/reducers';
import {TInitialState as TFilterState} from 'store/reducers/filter';
import {IProduct} from 'models/interfaces';

import {createSelector} from 'reselect';
import {filterProducts} from 'utils/filters';

type TProductsState = Pick<RootState, 'products'>

const getProducts = ({products}: TProductsState): Array<IProduct> => products.items;
const getFilter = ({filter}: {filter: TFilterState}): TFilterState => filter;

export const getFilteredProducts = createSelector(
  [getProducts, getFilter],
  (products, filter) => {
    return products && filterProducts(products, filter.filterBy, filter.searchQuery)
  }
);
