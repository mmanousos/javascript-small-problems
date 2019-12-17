// Digits List
// Write a function that takes one argument, a positive integer, and returns a
// list of the digits in the number.

// Examples:
//
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// Problem
// In: single positive integer
// Out: array of all digits that make up that integer
//
// Approach Brainstorming:
// convert the number to a string
// split the string into characters
// map each character back to a number

const digitList = function digitsInInteger(value) {
  return String(value).split('').map((el) => Number(el));
}


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
