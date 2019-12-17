// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of 
// numbers, and returns a new array containing the products of all combinations 
// of number pairs that exist between the two arrays. The returned array should 
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

  // Example:

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// Problem
// In: two arrays of numbers
// Out: single new array containing products of each of the values in array 1 * each of the values in array 2
// array sorted in ascending numberical order

// Assumptions: neither array is empty

// Approach Brainstorming

// two forEach iterations?
// create new array 
// iterate over array 1, multiplying each value with each value in array 2
// push each product into the new array 
// sort the new array and return

// Data Structure
// array 

// Algorithm
// BEGIN
//   SET results = []
//   arr1.forEach((num) => {
//     return arr2.forEach((val) => results.push(num * val));
//   });    
//   results.sort((a, b) => a - b);
// END

const multiplyAllPairs = function multiplyTwoArraysAndSort(arr1, arr2) {
  const results = [];
  arr1.forEach((arr1num) => {
    arr2.forEach((arr2num) => results.push(arr1num * arr2num));
  });
  return results.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]