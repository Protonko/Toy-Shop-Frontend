import {ORDER_BY} from 'models/enums';

type TOrder = ORDER_BY.DESC | ORDER_BY.ASC;

export const orderBy = (collection: Array<any>, iteratees: string, orders: TOrder) =>
    collection.concat().sort(sortBy(iteratees, orders));

const sortBy = (iteratees: string, orders: string) => {
  switch (orders.toUpperCase()) {
    case ORDER_BY.DESC:
      return (firstItem: any, lastItem: any) =>
          (firstItem[iteratees] < lastItem[iteratees])
              ? 1
              : ((lastItem[iteratees] < firstItem[iteratees])
              ? -1
              : 0);
    default: // ASC
      return (firstItem: any, lastItem: any) =>
          (firstItem[iteratees] > lastItem[iteratees])
              ? 1
              : ((lastItem[iteratees] > firstItem[iteratees])
              ? -1
              : 0);
  }
};
