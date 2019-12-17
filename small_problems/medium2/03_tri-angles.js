// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
// and every angle must be greater than 0. If either of these conditions is not 
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and 
// returns one of the following four strings representing the triangle's 
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to 
// worry about floating point errors. You may also assume that the arguments are 
// in degrees.

// Problem
// In: three angles of a triangle as integers
// Out: triangle classification - 'right', 'acute', 'obtuse', or 'invalid'

// Rules:
// - invalid
//   - angle <= 0
//   - sum of angles < 180
// - right
//   - one angle === 90
// - acute
//   - all three angles are < 90
// - obtuse
//   - one angle is > 90

// Notes:
// Assumptions:
// - all input will be valid numbers 
// - all input will be integers (no floating point numbers)
// - arguments are in degrees

// Approach Brainstorming:
// if ang1 + ang2 + ang3 < 180 || angles.some((angle) => angle === 0)
//   return 'invalid'
// iterate through angles  
//   if angle === 90
//     return 'right'
//   if angle > 90
//     return 'obtuse'    
// return 'acute'

// Example / Tests
// triangle(60, 70, 50);       // "acute"
// triangle(30, 90, 60);       // "right"
// triangle(120, 50, 10);      // "obtuse"
// triangle(0, 90, 90);        // "invalid"
// triangle(50, 50, 50);       // "invalid"

// Data Structure
// Array

function isInvalid(angles) {
  return (angles.reduce((sum, angle) => sum + angle) < 180 || 
      (angles.some((angle) => angle === 0)));
}

function triangle(angle1, angle2, angle3) {
  let classification;
  const angles =[arguments[0], arguments[1], arguments[2]];
  if (isInvalid(angles)) return 'invalid';
  for (let i = 0; i < angles.length; i += 1) {
    let angle = angles[i];
    if (angle === 90) return 'right';
    else if (angle > 90) return 'obtuse';
  }
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(120, -50, 10));     // "invalid"
console.log(triangle(25, 65, 90));       // "right"
console.log(triangle(25, 55, 100));      // "obtuse"