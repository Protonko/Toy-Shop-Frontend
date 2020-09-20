import {IFilterData} from 'models/interfaces';

export const filterData: Array<IFilterData> = [
  {
    id: 0,
    title: 'All',
    code: 'ALL',
  },
  {
    id: 1,
    title: 'Price (low)',
    code: 'PRICE_LOW',
  },
  {
    id: 2,
    title: 'Price (high)',
    code: 'PRICE_HIGH',
  },
  {
    id: 3,
    title: 'Category',
    code: 'CATEGORY',
  },
];
