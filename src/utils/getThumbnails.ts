export const getThumbnails = (array: Array<string>) => {
  array.map(elem => ({
    original: elem,
    thumbnail: elem,
  }));
};
