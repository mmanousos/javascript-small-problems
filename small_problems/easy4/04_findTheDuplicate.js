// Find the Duplicate
// Given an unordered array and the information that exactly one value in the
// array occurs twice (every other value occurs exactly once), determine which
// value occurs twice. Write a function that will find and return the duplicate
// value that is in the array.

// Examples:
//
// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// Problem
// In: array of values
// Out: single repeated value
//
// Assumptions: only one value in the argument is repeated.
//
// Approach Brainstorming:
// approach 1
// - iterate over the array and build an object of the counts of each element
// - return the key for the property with a value of 2
//
// approach 2
// - iterate over the array and build an object of the counts of each element
// - if there is a already a key of that element, break and return that element
//
// approach 3
// - iterate over the array
// - get the index of the current element
// - get the last index of the current element
// - if they do not match, return the current element value
//
// Algorithm
// BEGIN
//   array of values
//
//   WHILE values remain in array
//     i = index of current element
//     if lastIndexOf(element) !== i
//     return element
//   END
// END

const findDup = function findDuplicateElement(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array.lastIndexOf(array[i]) !== i) return array[i];
  }
};



console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73
