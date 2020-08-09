export const orderBy = (collection, iteratees, orders) =>
    collection.concat().sort(sortBy(iteratees, orders));

const sortBy = (iteratees, orders) => {
  switch (orders.toUpperCase()) {
    case 'ASC':
      return (firstItem, lastItem) =>
          (firstItem[iteratees] > lastItem[iteratees])
              ? 1
              : ((lastItem[iteratees] > firstItem[iteratees])
              ? -1
              : 0);
    case 'DESC':
      return (firstItem, lastItem) =>
          (firstItem[iteratees] < lastItem[iteratees])
              ? 1
              : ((lastItem[iteratees] < firstItem[iteratees])
              ? -1
              : 0);
    default:
      return (firstItem, lastItem) =>
          (firstItem[iteratees] > lastItem[iteratees])
              ? 1
              : ((lastItem[iteratees] > firstItem[iteratees])
              ? -1
              : 0);
  }
};
