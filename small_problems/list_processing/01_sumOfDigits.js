// Sum of Digits
// Write a function that takes one argument, a positive integer, and returns the 
// sum of its digits. Do this using list processing techniques.

//   Examples:

// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

// convert the number to a string
// split the string to an array of digit characters
// map the characters to numbers 
// reduce them to a single sum 

// const sum = function sumOfDigits(number) {
//   return String(number).split('').map(Number).reduce((sum, val) => sum += val);
// };

const sum = function sumOfDigits(number) {
  return String(number).split('').reduce((sum, val) => (sum += Number(val)));
};
// without starting value - returns original number! 
// because the starting value is a String value, + will concatenate instead of performing addition!

const sum = function sumOfDigits(number) {
  return String(number).split('').reduce((sum, val) => (sum += Number(val)), 0);
};
// with starting value of `0` - returns as expected because we're adding numbers

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45