// Fibonacci Numbers (Memoization)
// Our recursive fibonacci function from the previous exercise is not very 
// efficient. It starts slowing down with an nth argument value as low as 35. 
// One way to improve the performance of our recursive fibonacci function (and 
// other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future 
// reuse, instead of computing it from scratch every time it is needed. In the 
// case of our recursive fibonacci function, using memoization saves calls to 
// fibonacci(nth - 2) because the necessary values have already been computed by 
// the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci 
// function to use memoization.

// Problem
// In: number n
// Out: nth fibonacci number

// Rules: 
// - function should use memoization to store previously computed values
// // - fibonacci works as follows
// // F(1) = 1
// // F(2) = 1
// // F(n) = F(n - 1) + F(n - 2) where n > 2

// Notes: 
// // Hint: One approach to memoization is to use a lookup table, such as an 
// // object, for storing and accessing previously computed values.

// Assumptions: 
// - input n will be a valid positive integer

// Approach Brainstorming: 
// create object called fibs
// keys = n


// Example / Tests 


// Data Structure 


// Algorithm
// BEGIN

// END
// => check against test cases
// Does algorithm cover all test cases? 


// // standard recursive solution
// function fibonacci(n) {
//   if (n <= 2) return 1;
//   else return fibonacci(n - 1) + fibonacci(n - 2);
// }

// Course Solution
const fibs = {};

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    if (fibs[n]) {
      return fibs[n];
    } else {
      fibs[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return fibs[n];
    }
  }  
}

// original solution - slow with object within function - 
// because object has to be rebuilt each time the function is called
function fibonacci(n) {
  const fibs = {};
  if (n <= 2) {
    fibs[n] = 1;
  } else {
    fibs[n] = (fibs[n - 1] || fibonacci(n - 1)) + (fibs[n - 2] || fibonacci(n - 2));
  }
  return fibs[n];
}

// modified solution - sped up with object outside of function
const fibs = {};

function fibonacci(n) {
  if (n <= 2) {
    fibs[n] = 1;
  } else {
    fibs[n] = (fibs[n - 1] || fibonacci(n - 1)) + (fibs[n - 2] || fibonacci(n - 2));
  }
  return fibs[n];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(75));      // 2111485077978050
