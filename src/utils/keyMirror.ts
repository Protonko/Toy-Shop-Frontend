const keyMirror = (
  arr: Array<string> = [],
  prefix: string = ''
) => {
  return arr.reduce((
    obj: {[key: string]: string},
    key: string
  ) => {
    obj[key] = prefix + key;
    return obj;
  }, {});
};

export default keyMirror;
