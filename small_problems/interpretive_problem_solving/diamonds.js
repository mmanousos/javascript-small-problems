// Diamonds
// Write a function that displays a four-pointed diamond in an nxn grid, where n 
// is an odd integer supplied as an argument to the function. You may assume 
// that the argument will always be an odd integer.

// Problem
// In: number n that represents the size of the diamond
// Out: diamond within an n * n grid (n rows with the widest row being n characters long)

// Rules:
// - the diamond is created using '*' and ' ' to represent negative space
// - the diamond logs to the console  

// Assumptions:
// - n will always be an odd integer 

// Approach Brainstorming:

// diamond Approach 1
// generate an array of n rows of empty strings
// stars = 1
// midpoint = Math.floor(n / 2)
// middleRow = midpoint
// iterate over array of rows
//   map with index 
//   buffer = ' '.repeat(midpoint)
//     return buffer + '*'.repeat(stars) + buffer
  
//     if (index < middleRow)
//       stars += 2
//       midpoint -= 1
//     else if (index >= middleRow)
//       stars -= 2  
//       midpoint += 1


// output Approach 1
// store each row in an element of an array 
// iterate over the array, calling console.log on each element so they print separately

// output Approach 2
// store each row in a substring
// append a "\n" newline character to each row substring
// concatenate the row substring to a results string
// console.log the entire results string

// Example / Tests
// diamond(1);
// // logs
// *
// diamond(3);
// // logs
//  *
// ***
//  *
// diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// Data Structure
// array

function diamond(n) {
  let rows = Array.from(new Array(n));
  let stars = 1;
  let midpoint = Math.floor(n / 2);
  let middleRow = midpoint;
  rows = rows.map((row, index) => {
    let buffer = ' '.repeat(midpoint);
    row = buffer + '*'.repeat(stars) + buffer;

    if (index < middleRow) {
      stars += 2;
      midpoint -= 1;
    } else {
      stars -= 2;
      midpoint += 1;
    }

    return row;
  });

  rows.forEach((row) => console.log(row));
}

diamond(1);
// logs
// *
diamond(3);
// // logs
//  *
// ***
//  *
diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// Further Exploration
// The current solution builds a solid diamond—
// refactor it to build a hollow diamond.

// instead of incrementing the number of stars, increment how much space is between stars

function hollowDiamond(n) {
  let rows = Array.from(new Array(n));
  let star = '*';
  let padding = 1;
  let midpoint = Math.floor(n / 2);
  let middleRow = midpoint;
  rows = rows.map((row, index) => {
    let buffer = ' '.repeat(midpoint);
    if (index === 0 || index === n - 1) {
      row = buffer + star + buffer;
    } else { 
      row = buffer + star + ' '.repeat(padding) + star + buffer;
    }  

    if (index < middleRow) {
      midpoint -= 1;
    } else {
      midpoint += 1;
    }

    if (index > 0 && index < middleRow) {
      padding += 2;
    } else if (index >= middleRow) {
      padding -= 2;
    }

    return row;
  });

  rows.forEach((row) => console.log(row));
}

hollowDiamond(1);
// logs:
// *

hollowDiamond(3);
// logs:
// *
//* *
// *

hollowDiamond(5);
// logs:
//  *
// * *
//*   *
// * *
//  *

hollowDiamond(9);
// logs:
//    *
//   * *
//  *   *
// *     *
//*       *
// *     *
//  *   *
//   * *
//    *

