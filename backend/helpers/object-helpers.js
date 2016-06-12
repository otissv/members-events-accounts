
export function cleanObject (obj) {
  return JSON.parse(JSON.stringify(obj));
}


export function isCollectionEmpty (arry) {
  return arry.map(i => isObjectEmpty(arry)).every(b => b === true);
}


export function isObjectEmpty (obj) {

  function check (obj) {

    // checks if object is truthy or falsey
    if (!obj || obj.trim === '') return true;

    // checks objects length property (array)
    if (obj.length && obj.length > 0) return true;
    if (Object.keys(obj).length === 0) return true;
  }

  // checks all object properties are empty
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      return check(obj[key]);
    };
  }

  return check(obj);
}
