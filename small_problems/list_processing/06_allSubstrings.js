// All Substrings
// Write a function that returns a list of all substrings of a string. Order the 
// returned list by where in the string the substring begins.This means that all 
// substrings that start at position 0 should come first, then all substrings 
// that start at position 1, and so on. Since multiple substrings will occur at 
// each position, return the substrings at a given position from shortest to 
// longest.

// You may (and should) use the substringsAtStart function you wrote in the 
// previous exercise:

// Example:

// substrings('abcde');

// // returns
// ["a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"]

// Problem
// In: string
// Out: array of substrings - ordered ascending from index 0, then by length 

// Rules: use `substringsAtStart` function

// Approach Brainstorming:
// new array
// loop over string 
// at each character, create a substring from the parent string 
// run substringsAtStart and add to the new array
// return new array 

// split string to new array of characters
// map over new array with index
//   at each character, create a substring from the parent string
//   run substringsAtStart and add to the new array
// return new array

// Data Structure
// array

// Algorithm
// BEGIN
//   string input 
//   return string.split('').map with index
//     return substringsAtStart(string.substring(index))
// END


const substringsAtStart = function substringsToArray(string) {
  return string.split('').map((_, index) => string.substring(0, index + 1));
};

const substrings = function allSubstrings(string) {
  return string.split('').map((_, idx) => {
    return substringsAtStart(string.substring(idx));
  }).flat();
};

console.log(substrings('abcde'));

// returns
["a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e"]
