// Sum of Sums
// Write a function that takes an array of numbers, and returns the sum of the 
// sums of each leading subsequence for that array. You may assume that the 
// array always contains at least one number.

  // Examples:

// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35

// Problem
// In: array of integers
// Out: single value that sums all of the incrementing values

// Assumptions: array will never be empty

// Approach Brainstorming:
// map over the array
//   for each increasing index, use slice to include more of the values
//   and reduce to sum each subarray
// reduce the resulting values

// Data Structure
// array

// Algorithm
// BEGIN
//   input = array

//   sum = (((total, value) => total += value))

//   sumsArray = array.map((val, index) => {
//     let subArray = array.slice(0, index);
//     return subarray.reduce(sum);
//   });
//   return sumsArray.reduce(sum);
// END

// easy to understand / more verbose version
const sumOfSums = function reduceSumsOfSubarrays(array) {
  const sum = (total, value) => total += value;

  array.map((val, index) => {
    let subArray = array.slice(0, index + 1);
    return subArray.reduce(sum);
  });

  return sumsArray.reduce(sum);
};
  
// refactored, less easy to understand?
const sumOfSums = function reduceSumsOfSubarrays(array) {
  const sum = (total, value) => total += value;
  return array.map((val, index) => array.slice(0, index + 1).reduce(sum)).reduce(sum);
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35