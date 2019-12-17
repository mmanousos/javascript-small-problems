// Leading Substrings
// Write a function that takes a string argument, and returns a list of all 
// substrings that start from the beginning of the string, ordered from shortest 
// to longest.

  // Examples:

// substringsAtStart('abc');      // ["a", "ab", "abc"]
// substringsAtStart('a');        // ["a"]
// substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Problem
// In: string
// Out: array of substrings starting at first letter, shortest to longest

// Assumptions: assume string is not empty

// Approach Brainstorming:
// Approach 1
//   - split string into array of characters
//   - map array adding each letter from previous indexes (0 to current) to front of the current string
//   - return the array 

// Approach 2
//   - create a new array
//   - iterate through the string
//   - at each index, create a substring from 0 to that index
//   - push the substring to the array
//   - return the array

// Data Structure
// array

// Algorithm
// BEGIN
//   set results = []
//   for (let i = 0; i < string.length; i += 1) {
//     results.push(string.substring(string[0], string[i + 1]))
//   }
//   return results
// END

// const substringsAtStart = function substringsToArray(string) {
//   const results = [];
//   for (let i = 0; i < string.length; i += 1) {
//     results.push(string.substring(0, i + 1));
//   }
//   return results;
// };

const substringsAtStart = function substringsToArray(string) {
  return string.split('').map((_, index) => string.substring(0, index + 1));
};

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]