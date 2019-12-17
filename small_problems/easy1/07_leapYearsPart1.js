// Leap Years Part 1
// In the modern era under the Gregorian Calendar, leap years occur in every
// year that is evenly divisible by 4, unless the year is also divisible by 100.
// If the year is evenly divisible by 100, then it is not a leap year, unless
// the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function
// that takes any year greater than 0 as input, and returns true if the year is
// a leap year, or false if it is not a leap year.

// Examples:
//
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// Problem
// in: integer representing year (greater than 0)
// out: boolean representing whether the number represents a leap year or not
//
// edge: < 1

// Algorithm
// BEGIN
//   ArgumentError if integer < 1
//
//   if integer % 100 === 0 && integer % 400 === 0
//     return true
//   // else if integer % 100 === 0
//   //   return false
//   else if integer % 4 === 0 && integer % 100 !== 0
//     return true
//   else
//     return false
//   end
// END

function isLeapYear(year) {
  if (year < 1) {
    return 'That value is invalid. Please try again.';
  }

  if ((year % 100 === 0 && year % 400 === 0) ||
      (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }

  return false;
}


// console.log(isLeapYear(2016)  === true);      // true
// console.log(isLeapYear(2015) === false);      // false
// console.log(isLeapYear(2100) === false);      // false
// console.log(isLeapYear(2400) === true);      // true
// console.log(isLeapYear(240000) === true);    // true
// console.log(isLeapYear(240001) === false);    // false
// console.log(isLeapYear(2000) === true);      // true
// console.log(isLeapYear(1900) === false);      // false
// console.log(isLeapYear(1752) === true);      // true
// console.log(isLeapYear(1700) === false);      // false
// console.log(isLeapYear(1) === false);         // false
// console.log(isLeapYear(100) === false);       // false
// console.log(isLeapYear(400) === true);       // true
// console.log(isLeapYear(0));                 // invalid


// Course Solution
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// uses short circuit logic to return boolean based on conditional evaluation
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// alternate, even shorter way in some student solutions
// coerces expression into boolean, removes need for comparison with 0
function isLeapYear(year) {
  return !(year % 400) || (!(year % 4) && !!(year % 100));
}



// Further Exploration
// The order in which you perform tests for a leap year calculation is
// important. For what years will isLeapYear fail if you rewrite it as shown
// below?

// function isLeapYear(year) {
//   if (year % 100 === 0) {
//     return false;                 // fails at multiples of 400 because this check returns false before it gets to the 400s
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return year % 4 === 0;
//   }
// }

// Can you rewrite isLeapYear to perform its tests in the opposite order of the
// above solution? That is, test whether the year is divisible by 4 first, then,
// if necessary, test whether it is divisible by 100, and finally, if necessary,
// test whether it is divisible by 400. Is this solution simpler or more complex
// than the original solution?

// I know just by reading the requirements that it will be more complex
// but turns out it's not so much harder to understand

function isLeapYear(year) {
  let leapYear = false;

  if (year % 4 === 0) leapYear = true;

  if (year % 100 === 0) leapYear = false;

  if (year % 400 === 0) leapYear = true;

  return leapYear;
}

// further refactor to coerce expressions into booleans
function isLeapYear(year) {
  let leapYear = false;

  if (!(year % 4)) leapYear = true;

  if (!(year % 100)) leapYear = false;

  if (!(year % 400)) leapYear = true;

  return leapYear;
}

console.log(isLeapYear(2016)  === true);      // true
console.log(isLeapYear(2015) === false);      // false
console.log(isLeapYear(2100) === false);      // false
console.log(isLeapYear(2400) === true);      // true
console.log(isLeapYear(240000) === true);    // true
console.log(isLeapYear(240001) === false);    // false
console.log(isLeapYear(2000) === true);      // true
console.log(isLeapYear(1900) === false);      // false
console.log(isLeapYear(1752) === true);      // true
console.log(isLeapYear(1700) === false);      // false
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === false);       // false
console.log(isLeapYear(400) === true);       // true
