// Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum 
// of the first n positive integers and the sum of the squares of the first n 
// positive integers.

// Problem
// In: number n representing the number of positive integers to calculate
// Out: difference between square of the sum of first n positive integers -
// sum of squares of first n positive integers

// Assumptions: 
// - input will be a valid positive integer N

// Approach Brainstorming: 
// create an array of all positive integers from 1 - N
// square of sum = reduce array to sum then ** 2
// sum of squares = map over array squaring each and then reduce to sum
// return square of sum - sum of squares

// Example / Tests 
// // sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// // sumSquareDifference(10);     // 2640
// // sumSquareDifference(1);      // 0
// // sumSquareDifference(100);    // 25164150

// Data Structure 
// Array

function sumSquareDifference(n) {
  const sum = (total, value) => total += value;
  const values = Array.from(new Array(n), (x, i) => x = i + 1);
  const squareOfSums = values.reduce(sum) ** 2;
  const sumOfSquares = values.map((value) => value ** 2).reduce(sum);
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150