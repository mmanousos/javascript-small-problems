// Fibonacci Number Location by Length
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
// such that the first two numbers are 1 by definition, and each subsequent
// number is the sum of the two previous numbers. This series appears throughout
// the natural world.

// Computationally, the Fibonacci series is a simple series, but the results
// grow at an incredibly rapid rate. For example, the 100th Fibonacci number is
// 354,224,848,179,261,915,075—that's enormous, especially considering that it
// takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci
// number that has the number of digits specified by the argument. (The first
// Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal
// to 2.

// Examples:
//
// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

// Problem
// in: integer N >= 2
// out: index of Fibonacci number that has N digits
//
// Data Structure
// numbers but convert them to strings to evaluate number of digits
//
// Algorithm
// BEGIN
//   SET index = 1
//   until Fibonacci.length = N
//     IF length of string version of Fibonacci = N
//       return index
//     END
//
//     calculate Fibonacci number
//     SET previous = 0
//     SET current = 1
//     Fibonacci = previous + current
//     previous = current
//     current = Fibonacci
//     index += 1 
// END

function findFibonacciIndexByLength(integer) {
  let index = 1;
  let previous = 0;
  let current = 1;

  while (String(current).length !== integer) {
    [previous, current] = [current, previous + current];
    index += 1;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);
