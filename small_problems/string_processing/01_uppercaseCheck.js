// Uppercase Check
// Write a function that takes a string argument, and returns true if all of the 
// alphabetic characters inside the string are uppercase; false otherwise. 
// Ignore characters that are not alphabetic.

  // Examples:

// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

// Problem
// In: string
// Out: boolean representing whether every character is uppercase

// Rules: ignore non-letter characters
// Notes: regex?
// Assumptions: input will be a valid string

// Approach Brainstorming:
// use regex to strip out non-letter characters
// use regex to check if all characters match A-Z

// Data Structure
// String

function isUppercase(str) {
  let letters = str.replace(/[^A-Z]/ig, '').split('');
  return letters.every((letter) => letter.match(/[A-Z]/));
}

// Course Solution - checks that there are NOT lowercase letters
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
