// Reverse Number
// Write a function that takes a positive integer as an argument, and returns
// that number with its digits reversed.

// Examples:
//
// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that zeros get dropped!
// reverseNumber(1);        // 1

// Problem
// In: number
// Out: number with all digits reversed
//
// Notes: trailing zeros are dropped
//
// Approach Brainstorming:
// convert number to string
// split string to array of characters
// reverse array
// join array to single string
// convert characters back to numbers
// return

const reverseNumber = function reverseDigits(number) {
  return parseInt(String(number).split('').reverse().join(''), 10);
};

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
