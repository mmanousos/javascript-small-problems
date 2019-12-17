// Get the Middle Character
// Write a function that takes a non-empty string argument, and returns the
// middle character(s) of the string. If the string has an odd length, you
// should return exactly one character. If the string has an even length, you
// should return exactly two characters.

// Examples:
//
// centerOf('I Love Ruby');      // "e"
// centerOf('Launch School');    // " "
// centerOf('Launch');           // "un"
// centerOf('Launchschool');     // "hs"
// centerOf('x');                // "x"

// Problem
// In: non-empty string
// Out: middle character(s)
// two characters for even-length strings
// one character for odd-length strings
//
// Approach Brainstorming:
// get string length
// if length is odd, return character at Math.floor(length / 2)
// if length is even, return characters at (length/2) - 1 & length/2 + 1

// accessing elements by their index value
const centerOf = function getCenterCharacters(string) {
  const length = string.length;
  if (length % 2 === 1) return string[Math.floor(length / 2)];
  else return string[length/2 - 1] + string[length / 2];
}

// using String.prototype.substring
const centerOf = function getCenterCharacters(string) {
  const length = string.length;
  if (length % 2 === 1) return string[Math.floor(length / 2)];
  else return string.substring(length/2 - 1, length/2 + 1);
}



console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"
