// Counting Up
// Write a function that takes an integer argument, and returns an array
// containing all integers between 1 and the argument (inclusive), in ascending
// order.

// You may assume that the argument will always be a positive integer.

// Examples:
//
// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

// Problem
// In: positive integer
// Out: array of all integers from 1 to integer, inclusive
//
// Approach Brainstorming:
// iterate from 1 to integer adding elements to new array

const sequence = function createArrayOfIntegers(number) {
  const array = [];
  for (let i = 1; i <= number; i += 1) {
    array.push(i);
  }
  return array;
};


console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
