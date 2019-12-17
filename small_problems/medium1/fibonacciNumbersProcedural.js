// Fibonacci Numbers (Procedural)
// In the previous exercise, we developed a recursive solution for computing the 
// nth Fibonacci number. In a language that is not optimized for recursion, some 
// (but not all) recursive functions can be extremely slow and may require 
// massive quantities of memory and/or stack space. If you tested for bigger nth 
// numbers, you might have noticed that getting the 50th fibonacci number 
// already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or 
// procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results 
// without using recursion.

// Problem
// In: number n
// Out: nth fibonacci number

// Rules: 
// - function should work procedurally
// - fibonacci works as follows
// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

// Assumptions: 
// - input will be a valid positive integer

// Approach Brainstorming: 
// if n <= 2 return 1
// values = [1, 1]
// let i = 3
// while i < n
//   values.push(values[values.length - 1] + values[values.length - 2])
// return values[values.length]

// or simply sum them as we go
// val1 = 1
// val2 = 1
// fib = val1 + val2 
// [val1, val2] = [val2, fib]

function fibonacci(n) {
  let fib;
  if (n <= 2) fib = 1;
  else {
    let val1 = 1;
    let val2 = 1;
    for (let i = 2; i < n; i += 1) {    
      fib = val1 + val2;
      [val1, val2] = [val2, fib];
    }
  }
  return fib;
}

function fibonacci(n) {
  let fib;
  if (n <= 2) fib = 1;
  else {
    let values = [1, 1];
    for (let i = 2; i < n; i += 1) {
      let next = values[i - 1] + values[i - 2];  
      values.push(next);
      fib = values[values.length - 1];
    }
  }
  return fib;
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(2));        // 1
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// Note that JavaScript can accurately compute intergers up to 16 digits long; 
// this means that fibbonacci(78) is the largest Fibbonacci number that you can 
// accurately compute with simple operations in JavaScript.