// Multiplicative Average
// Write a function that takes an array of integers as input, multiplies all of
// the integers together, divides the result by the number of entries in the
// array, and returns the result as a string with the value rounded to three
// decimal places.

// Examples:
//
// showMultiplicativeAverage([3, 5]);                   // "7.500"
// showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// Problem
// In: array of integers
// Out: single string that is a floating point number representing the
// multiplicate average of all the numbers (product divided by number of values)
// rounded to three places.
//
// Approach Brainstorming:
// get length of array
// reduce values to a single product
// divide sum by length
// get 3 decimal places
// convert to a string

const showMultiplicativeAverage = function multiplyAndDivide(array) {
  const product = array.reduce((element, currentValue) => currentValue * element);
  return (product/array.length).toFixed(3);
};

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
