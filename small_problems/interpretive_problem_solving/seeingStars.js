// Seeing Stars
// Write a function that displays an 8-pointed star in an nxn grid, where n is 
// an odd integer that is supplied as an argument to the function. The smallest 
// such star you need to handle is a 7x7 grid (i.e., when n is 7).

// Problem
// In: odd number n >= 7, representing the size of the grid
// Out: log of 8-sided star
// n = width and height of star

// Rules:
// center row === '*'.repeat(n)
// center + / - 1 === '*'.repeat(3)
// margin = 0
// padding = (n - 3) / 2
// center = Math.floor(n / 2)

// Notes: 
// Assumptions: 
// - arguments will be valid odd integers >= 7

// Approach Brainstorming: 
// build an array of rows
// if array.length < center 
//   margin += 1
//   padding -= 1
// if array.length === center  
//   all '*'  
// if array.length > center
//   margin -= 1
//   padding += 1
// array.forEach((row) => console.log(row));
const buildRow = function(char, margin, padding) {
  let outside = ' '.repeat(margin);
  let inside = ' '.repeat(padding);
  return outside + char + inside + char + inside + char + outside;
};

const star = function buildAndLogStar(number) {
  const rows = [];
  const char = '*';
  const center = Math.floor(number / 2);  
  let margin = 0;
  let padding = ((number - 3) / 2);
  
  for (let i = 0; i < number; i += 1) {
    if (i < center) {      
      rows.push(buildRow(char, margin, padding));
      margin = (margin + 1 >= center) ? center - 1 : margin + 1;
      padding = (padding - 1 < 0) ? 0 : padding - 1;
      
    } else if (i === center) {
      rows.push(char.repeat(number));
    } else {
      rows.push(buildRow(char, margin, padding));
      margin -= 1;
      padding += 1;  
    }
  }

  rows.forEach((row) => console.log(row));
};

star(7);

// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);

// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(19);