// Rotation Part 3
// Take the number 735291 and rotate it by one digit to the left, getting 
// 352917. Next, keep the first digit fixed in place and rotate the remaining 
// digits to get 329175. Keep the first two digits fixed in place and rotate 
// again to get 321759. Keep the first three digits fixed in place and rotate 
// again to get 321597. Finally, keep the first four digits fixed in place and 
// rotate the final two digits to get 321579. The resulting number is called the 
// maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the 
// maximum rotation of that integer. You can (and probably should) use the 
// rotateRightmostDigits function from the previous exercise.

// Problem
// In: number
// Out: maximally rotated number
//            in = 735291
//   rotation 1 => 352917
//   rotation 2 => 329175
//   rotation 3 => 321759
//   rotation 4 => 321597
//   rotation 5 => 321579

// Rules: 
// - rotate 1 fewer times than number of digits to reach maximum rotation 
// - on each rotation, move to the left by one index value (shorter and shorter numbers)

// Assumptions: 
// - input is a valid positive integer


// Approach Brainstorming: 
// convert the number to a string
// get the length of the string
// for loop (i < length)
//   get substring => number.substring(i)
//   pass in Number.parseInt(substring, 10), substring.length as arguments
// return rotated number


// Example / Tests 
// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

// Data Structure 
// number to string to array back to string to number

// Algorithm
// BEGIN
//   numString = Number(string)
//   len = numString.length
//   for (let i = 0; i < length; i += 1) {
//     front = numString(0, i)
//     part = numString.substring(i)
//     part = rotateRightmostDigits(Number(part), i)
//     numString = front + String(part)
//   }
//   return Number.parseInt(numString, 10);
// END
// => check against test cases
// Does algorithm cover all test cases? 

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

// My solution - doesn't work for values with 0s
// doesn't allow for the length of the number string to get shorter when 
// number strings with leading 0s are converted back to numbers
function maxRotation(number) {
  let numString = String(number);
  let len = numString.length;
  for (let i = 0; i < len; i += 1) {
    let rotating = numString.substring(i);
    rotating = rotateRightmostDigits(Number(rotating), rotating.length);
    numString = numString.slice(0, i) + String(rotating); 
  }
  return Number(numString);
}

// Course Solution
function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }
  return number
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
