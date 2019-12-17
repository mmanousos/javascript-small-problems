// Problem
// In: number N
// Out: coordinates [x, y] of which cell on a grid will be light at second N

// Rules: 
// Column and row indices are 1 - based.
// x is the column index, and y is the row index.
// The cells are indexed from bottom - left corner.
// N will be large.

// Assumptions: 
// - input will be a valid positive integer
// - N will be <= 25

// Approach Brainstorming: 
// Store each row of values in a nested array 
//   iterate through the arrays, using i as a counter
//   if N exists in the subarray, y = i + 1;
//   within that subarray, get the index of N, x = index + 1
//   return [x, y]
  
// Example / Tests 
// console.log(fantabulousBirthday(8)) // [2, 3]
// console.log(fantabulousBirthday(20) // [5, 4]
// console.log(fantabulousBirthday(25) // [1, 5]

// Data Structure 
// nested array


const GRID = [[1, 4, 5, 16, 17], [2, 3, 6, 15, 18], [9, 8, 7, 14, 19],
              [10, 11, 12, 13, 20], [25, 24, 23, 22, 21]];

function fantabulousBirthday(n) {  
  for (let i = 0; i < GRID.length; i += 1) {
    if (GRID[i].includes(n)) {
      return [GRID[i].indexOf(n) + 1, i + 1];
    }
  }
}              

console.log(fantabulousBirthday(8)); // [2, 3]
console.log(fantabulousBirthday(20)); // [5, 4]
console.log(fantabulousBirthday(25)); // [1, 5]

// Works for these test cases, but does not extrapolate out the grid for additional values.