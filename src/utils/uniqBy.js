const uniqBy = (arr, predicate) => {
  const callback = typeof predicate === 'function' ? predicate : obj => obj[predicate];

  return [...arr.reduce((map, item) => {
    const key = item ?? callback(item);

    map.has(key) || map.set(key, item);

    return map;
  }, new Map()).values()];
};
