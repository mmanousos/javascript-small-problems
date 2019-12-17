// Combining Arrays
// Write a function that takes two arrays as arguments, and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates in
// the original arrays. You may assume that both arguments will always be arrays.

// Example:

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
// Problem
// In: two arrays of values
// Out: single merged array with no duplicates
//
// Assumptions: both arguments will always be arrays
// Notes: choosing not to alter the original arrays
//
// Approach Brainstorming:
// Make a copy of the first array
// Iterate over second array, adding each element to the first only if it doesn't already exist

const union = function mergeUniqueArrayValues(arr1, arr2) {
  result = arr1.slice();
  arr2.forEach((value) => {
    if (!arr1.includes(value)) result.push(value);
  });

  return result;
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
