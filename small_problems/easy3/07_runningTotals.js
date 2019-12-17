// Running Totals
// Write a function that takes an array of numbers, and returns an array with
// the same number of elements, with each element's value being the running
// total from the original array.

// Examples:
//
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// Problem
// In: array of values
// Out: mapped array of values that instead is the running total of those elements
// (e.g. 2, 5, 13 returns 2, 7, 20 because 7 is the sum of 2 and 5, 20 is the sum of 13 and 7)
//
// Approach Brainstorming:
// preserve original array
// make a copy of the original array
// starting at position 1 of the new array, look one behind and add that amount to the current value
// iterate through until reached the end of the array

const runningTotal = function sumOfEachPreviousValue(array) {
  const results = array.slice();

  for (let i = 1; i < array.length; i += 1) {
    results[i] = results[i] + results[i - 1];
  }

  return results;
};

// Further Exploration
// Can you rewrite the solution using the Array.prototype.map method? What types
// of problems do you think are well-suited for the Array.prototype.map method?

// Yes, it works with map, but seems slightly more convoluted without accessing
// the index of each mapped element.

const runningTotal = function sumOfEachPreviousValue(array) {
  let sum = 0;
  const results = array.map((element) => {
    sum = sum + element;
    return sum;
  });

  return results;
};

// a version of map with index is possible but we can't use it because
// array[idx - 1] at index 0 will be undefined and math with undefined values
// returns NaN.

// syntax for map()
// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array
// }[, thisArg])

// This is my version using map with index values - would work if array[idx - 1]
// at index 0 returnned `null` instead of `undefined`
const runningTotal = function sumOfEachPreviousValue(array) {
  return array.map((element, idx) => element + array[idx - 1]);
};


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
