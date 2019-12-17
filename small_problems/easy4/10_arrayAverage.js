// Array Average
// Write a function that takes one argument, an array containing integers, and
// returns the average of all the integers in the array, rounded down to the
// integer component of the average. The array will never be empty, and the
// numbers will always be positive integers.

// Examples:
//
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

// Problem
// In: array of integers
// Out: single integer representing the average of the integers in the array rounded down
//
// Assumptions: array will not be empty and numbers will always be positive integers
//
// Approach Brainstorming:
// get length of array
// reduce array to single sum
// divide sum / length
// round down and return

const average = function(array) {
  return Math.floor(array.reduce((sum, number) => sum + number) / array.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
