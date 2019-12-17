// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

// Examples:
//
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// Problem
// In: number
// Out: negative version of that number (itself if already negative)
//
// Notes: 0 is considered positive for this exercise
//
// Approach Brainstorming:
// return the opposite of the absolute value of the number

// const negative = function(number) {
//   return -(Math.abs(number));
// };

// Further Exploration
// An alternative solution would be to use the ternary operator
// (e.g., a ? b : c). If you haven't already used it, try refactoring the
// solution using the ternary operator.

const negative = function(number) {
  return (number < 0 ? number : -number);
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
