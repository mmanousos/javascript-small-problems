// Delete Vowels
// Write a function that takes an array of strings, and returns an array of the 
// same strings values without the vowels (a, e, i, o, u).

// Examples:

// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// Problem
// In: array of strings
// Out: same array of strings but with all vowels removed 

// Rules: vowels are only a, e, i, o, u (not y)
// Notes: use map
// Assumptions: array will not be empty, will contain valid strings

// Approach Brainstorming:
// use map to transform each string within the array
// use replace and regex /[aeiou]/

// Data Structure
// array

function removeVowels(strings) {
  return strings.map((string) => string.replace(/[aeiou]/gi, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]