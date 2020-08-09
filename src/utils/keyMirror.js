export default (arr = [], prefix = '') => {
  return arr.reduce((obj, key) => {
    obj[key] = prefix + key;
    return obj;
  }, {});
};
