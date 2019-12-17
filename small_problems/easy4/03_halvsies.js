// Halvsies
// Write a function that takes an array as an argument, and returns an array
// that contains two elements, each of which is an array. Put the first half of
// the original array elements in the first element of the return value, and put
// the second half in the second element. If the original array contains an odd
// number of elements, place the middle element in the first half array.

// Examples:
//
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// Problem
// In: array
// Out: two arrays - first half of elements in one, second half of elements in other
//
// Rules: if uneven number of elements provided, extra element goes in first array
//
// Approach Brainstorming:
// get length of array
// if even, get center point
// if odd, get center + 1
// use slice to create two new arrays: 0 to half; half to end

// first solution
const halvsies = function divideArrayInHalf(array) {
  let results = [];
  let length = array.length;
  let midpoint = (length % 2 === 1) ? length / 2 + 1 : length / 2;

  results.push(array.slice(0, midpoint));
  results.push(array.slice(midpoint));

  return results;
};

// second solution after looking at Course Solution
const halvsies = function divideArrayInHalf(array) {
  let midpoint = Math.round(array.length / 2);
  return [array.slice(0, midpoint), array.slice(midpoint)];
};

// can also use Math.ceil to get the appropriate halfway point

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
