// types
import {IFilterData} from 'models/interfaces';
import {FILTER_TYPES} from 'models/enums';

export const filterData: Array<IFilterData> = [
  {
    id: 0,
    title: 'All',
    code: FILTER_TYPES.ALL,
  },
  {
    id: 1,
    title: 'Price (low)',
    code: FILTER_TYPES.PRICE_LOW,
  },
  {
    id: 2,
    title: 'Price (high)',
    code: FILTER_TYPES.PRICE_HIGH,
  },
  {
    id: 3,
    title: 'Category',
    code: FILTER_TYPES.CATEGORY,
  },
];
