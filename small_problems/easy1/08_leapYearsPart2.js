// Leap Years Part 2
// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap
// year. Prior to 1752, they used the Julian Calendar. Under the Julian
// Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to
// determine leap years both before and after 1752.

// Examples:

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// Problem
// in: integer representing year
// out: boolean representing if year is leap year
//
// if year is < or = 1752 and divisible by 4, true
// otherwise, additional 100 / 400 year rules apply
//
// Algorithm
// BEGIN
//   check if year is <= 1752
//   if yes and % 4 === 0 true
//   else check 400 and 100 also
// END

function isLeapYear(year) {
  if (year <= 1752) {
    return !(year % 4);
  } else {
    return !(year % 400) || (!(year % 4) && !!(year % 100));
  }
}

console.log(isLeapYear(2016)  === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === true);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === true);
console.log(isLeapYear(400) === true);
