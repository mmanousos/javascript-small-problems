// Rotation Part 2
// Write a function that rotates the last n digits of a number. For the 
// rotation, rotate by one digit to the left, moving the first digit to the end.

// Problem
// In: number, n representing number of digits to rotate to the end
// Out: new number with nth digit from the right rotated

// Rules: 
// - digits rotate by moving the nth digit to the end of the number

// Assumptions: 
// - both number and n are valid positive integers
// - n is less than or equal to the number of digits in the number

// Approach Brainstorming: 
// convert the number into a string
// split the string into digit characters
// calculate the nth character from the end of the number
//   string.length - n
//   slice from 0 to that character
//   slice from that character 
//     rotate using the function from the previous solution
//   concat slice from 0 with rotated array
// join the digit characters back to a single string 
// convert the string to a number

// Example / Tests 
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// Data Structure 
// string to Array

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(number, digits) {
  let numString = String(number);
  let position = numString.length - digits;
  let digitChars = rotateArray(numString.substring(position).split('')).join('');
  
  return Number.parseInt(numString.substring(0, position) + digitChars, 10);
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917