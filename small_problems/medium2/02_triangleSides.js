// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must 
// be greater than the length of the longest side, and every side must have a 
// length greater than 0. If either of these conditions is not satisfied, the 
// triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as 
// arguments, and returns one of the following four strings representing the 
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or 
// 'invalid'.

// Problem
// In: three sides of a triangle as numbers
// Out: triangle classification - 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

// Rules: 
// 'invalid' 
// - any length of 0
// - sum of two shortest sides < longest side 

// 'equilateral' - all three numbers are the same
// 'isosceles' - two of the three are the same
// 'scalene' - all three sides are different lengths


// Notes: 
// Assumptions: 
// - all input will be valid numbers
// - numbers could be negative or floats

// Approach Brainstorming: 
// sort arguments object in ascending order => .sort((a, b) => a - b)
// check for invalid 
//   some element <= 0 ||
//   arg[0] + arg[1] < arg[2]
//     return invalid
// check for 3 of the same
//   every element === arg[0]
//     return 'equilateral'
// check for 2 of the same
//   if (arg[0] === arg[1] || arg[0] === arg[2]) || (arg[1] === arg[2])
//     return 'isoceles'
// else
//     return 'scalene'

// Example / Tests 
// // triangle(3, 3, 3);        // "equilateral"
// // triangle(3, 3, 1.5);      // "isosceles"
// // triangle(3, 4, 5);        // "scalene"
// // triangle(0, 3, 3);        // "invalid"
// // triangle(3, 1, 1);        // "invalid"

// Data Structure 
// Array

function triangle(side1, side2, side3) {
  const sides = [side1, side2, side3].sort((a,b) => a - b);
  if (sides.some((side) => side <= 0) || sides[0] + sides[1] < sides[2]) {
    return 'invalid';
  } else if (sides.every((side) => side === sides[0])) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[0] === sides[2] || 
              sides[1] === sides[2]) {
    return 'isoceles';          
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(-3, 1, 1));       // "invalid"