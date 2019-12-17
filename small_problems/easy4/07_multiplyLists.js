// Multiply Lists
// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array that contains the product of each pair of
// numbers from the arguments that have the same index. You may assume that the
// arguments contain the same number of elements.

// Example:
//
// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// Problem
// In: two arrays of the same length
// Out: a single array with products of the original two arrays
//
// Assumptions: arrays are the same length
//
// Approach Brainstorming:
// map over array1
// for each element, get the index i and multiply the current element * array2[i]
// return new array

const multiplyList = function productsOfTwoArrayValues(arr1, arr2) {
  return arr1.map((el, idx) => el * arr2[idx]);
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
