const identity = function (value) {
  return value;
};

const first = function (array, n) {
  if (n === undefined) {
    return array[0]; //Returns the first element if n is undefined
  } else {
    return array.slice(0, n); // Returns the first n element of the array
  }
};
  
const last = function (arr, n) {
  if (n === undefined) {
    return arr[arr.length - 1]; // Return the last element if n is undefined
  } else if (n ===0){
    return [] // Return an empty array if n is zero
  }
return arr.slice(-n); // Return the last n elements of the array
};

const each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
    }
} else if (typeof collection === 'object' && collection !== null) {
    for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
            iterator(collection[key], key, collection);
        }
    }
  }
};

const indexOf = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        return i; // returns the index if the value is found
    }
  }
  return -1; // returns -1 if the value is not found in the array 
};

const map = function (arr, iterator) {
  let results = [];
    for (let i = 0; i < arr.length; i++) {
        results.push(iterator(arr[i], i, arr));
    }
    return results;
}

const filter = (array, predicate) => {
  if (!Array.isArray(array) || array.length === 0) {
      return []; // Return an empty array if the input is not an array or is empty
  }

  let results = [];
  for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
          results.push(array[i]);
      }
  }
  return results;
}

const reject = (array, predicate) => {
  if (!Array.isArray(array) || array.length === 0) {
      return []; // Return an empty array if the input is not an array or is empty
  }

  let results = [];
  for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
          results.push(array[i]);
      }
  }
  return results;
}

const uniq = (array) =>{
  return Array.isArray(array) ? Array.from(new Set(array)) : [];
}

const reduce = (collection, iterator, accumulator) => {
  let initializing = accumulator === undefined;

  if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
          if (initializing) {
              accumulator = collection[i];
              initializing = false;
          } else {
              accumulator = iterator(accumulator, collection[i], i, collection);
          }
      }
  } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
          if (collection.hasOwnProperty(key)) {
              if (initializing) {
                  accumulator = collection[key];
                  initializing = false;
              } else {
                  accumulator = iterator(accumulator, collection[key], key, collection);
              }
          }
      }
  }

  return accumulator;
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};