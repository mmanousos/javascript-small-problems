// Write a function that takes an array of strings as an argument and returns a 
// sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different 
// lengths, so you will not have to decide how to order multiple strings of the 
// same length.

// Problem
// In: array of strings
// Out: array with same elements sorted by length of the string

// Rules: 
// - all strings will be different lengths

// Assumptions: 
// - argument will be valid array
// - array elements will be valid strings

// Approach Brainstorming: 
// use sort method and use string.length as ordering mechanism

// Example / Tests 
// sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]); // ["Eyes", "Glasses", "Monocles", "Telescopes"] 
// sortByLength(["a", "bbb", "dddd", "cc"]); // ["a", "cc", "bbb", "dddd"]

// Data Structure 
// Array


function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])); // ["Eyes", "Glasses", "Monocles", "Telescopes"] 
console.log(sortByLength(["a", "bbb", "dddd", "cc"])); // ["a", "cc", "bbb", "dddd"]
