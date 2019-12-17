// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance, if the
// supplied number is 20, the result should be
// 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Problem
// in: integer
// out: sum of all integers between 1 and that number, inclusive, that are multiples of 3 or 5
//
// assume: number is an integer > 1
// edge case: numbers that are multiples of both 3 and 5 should only be included once
//
// Example / Tests
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// Algorithm
// BEGIN
//   SET result = 0;
//   SET start = 1;
//   increment from 1 to integer
//     if current number is % 5 or % 3 === 0
//       add to result
//
//   return result
// END

function multisum(number) {
  let result = 0;

  for (let i = 1; i <= number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

console.log(multisum(3)=== 3);       // 3
console.log(multisum(5)=== 8);       // 8
console.log(multisum(10)=== 33);      // 33
console.log(multisum(1000)=== 234168);    // 234168
