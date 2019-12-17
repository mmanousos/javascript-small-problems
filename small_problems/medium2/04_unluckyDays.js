// Unlucky Days
// Write a function that takes a year as an argument, and returns the number of 
// 'Friday the 13ths' in that year. You may assume that the year is greater than 
// 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). 
// You may also assume that the same calendar will remain in use for the 
// foreseeable future.

// Problem
// In: year in the gregorian calendar system (after 1752) represented as number
// Out: number of Fridays in that year that fall on the 13th day of the month

// Assumptions:
// - input will be a valid positive integer
// - year is greater than 1752

// Approach Brainstorming:
// - counter
// - get 13th of January => date = new Date(year, 0, 13)
// - test if it is on a Friday => date.getDay() === 5
//   if yes, increment counter
// - increment months, testing each 
// - return counter

// for 0 - 11, create array of date objects
// map over the array, if date.getDay() === 5 ? convert to 1 : 0
// reduce to sum and return

// Example / Tests
// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

// Data Structure
// Date object

// Algorithm
// BEGIN
//   SET fridays = []
//   i = 0
//   while i < 12; i += 1
//     fridays.push(new Date(year, i, 13))

//   fridays.map((month) => month.getDay() === 5 ? 1 : 0)
//   return fridays.reduce((total, friday) total += friday)  
// END
// => check against test cases
// Does algorithm cover all test cases?

// original solution
function fridayThe13ths(year) {
  let fridays = [];
  for (let i = 0; i < 12; i += 1) {
    fridays.push(new Date(year, i, 13));
  }
  fridays = fridays.map((month) => month.getDay() === 5 ? 1 : 0);
  return fridays.reduce((total, friday) => total += friday);
}

// secondary solution
// using filter and simply counting the number of elements left in the array
function fridayThe13ths(year) {
  let fridays = [];
  for (let i = 0; i < 12; i += 1) {
    fridays.push(new Date(year, i, 13));
  }
  return (fridays.filter((month) => month.getDay() === 5)).length;
}

// Further Exploration
The `reduce` method requires an extra iterative step vs filter and length => 
likely uses more computational power that isn't really necessary.

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2