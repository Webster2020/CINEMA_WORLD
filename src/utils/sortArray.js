export const sortArrByObjProp = (arr, prop) =>
  arr.sort((a, b) => (a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0));
