// Array Shift and Unshift
// In this exercise, you will implement your own versions of the
// Array.prototype.shift and Array.prototype.unshift methods. These methods
// manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that
// element; if the array is empty, shift returns undefined. The unshift method
// adds one or more elements to the start of an array and returns the new length
// of the array. Both methods mutate the original array.

// shift:
// in: array
// out: undefined if array is empty
// else first element from array
// array elements are shifted left and size is reduced

const shift = function removeElementsFromFrontOfArray(array) {
  const length = array.length;

  if (length === 0) return undefined;

  const first = array[0];
  array.splice(0, 1);

  return first;
};

// Course Solution
const shift = function removeElementsFromFrontOfArray(array) {
  let result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

// unshift:
// in: array, one or more elements
// out: size of adjusted array
// elements are added to the front of the array

const unshift = function addElementsToFrontOfArray(array, ...arguments) {
  array.splice(0, 0, ...arguments);

  return array.length;
};

// Course Solution
function unshift(array) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array.splice(i - 1, 0, arguments[i]);
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// let arr = [1,2,3];
// const added = unshift(arr, 5, 6);
// console.log(added);        // 5
// console.log(arr);          // [5, 6, 1, 2, 3]
//
// console.log(unshift([1,2,3]));              // 3
//
// const arr2 = [4, 5];
// const addedArray = unshift(arr2, [1,2,3]);
// console.log(addedArray);      // 3
// console.log(arr2);            // [[1, 2, 3], 4, 5]
//
// var testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]
