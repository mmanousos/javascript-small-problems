// Double Doubles
// A double number is an even-length number whose left-side digits are exactly
// the same as its right-side digits. For example, 44, 3333, 103103, and 7676
// are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied
// by two, unless the argument is a double number; return double numbers as-is.

// Problem
// in: number (assume positive integers)
// out: number if it is a `double number` otherwise number * 2
// double number = must be even number of digits and the numbers on each side of
// the midpoint must be in the same order (not palindromes)

// Algorithm
// BEGIN
//   convert number to a string
//   get length of string (# of digits)
//
//   guard clause:
//     return number * 2 if number of digits is odd
//
//   verification step:
//     split number into two halves
//     iterate over both halves checking if each value is ===
//     if not, break and return number * 2
//
//   return number
// END

function twice(number) {
  let stringNumber = String(number);
  let digitCount = stringNumber.length;

  if (digitCount % 2 === 1) return number * 2;

  let firstHalf = stringNumber.substring(0, digitCount/2);
  let secondHalf = stringNumber.substring(digitCount/2);

  return firstHalf === secondHalf ? number : number * 2;
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);
