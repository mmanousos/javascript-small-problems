// What Century is That
// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and ends
// with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

// Problem
// in: integer representing a year (assume integers > 0)
// out: number with appropriate suffix indicating which century the year belongs to
//
// 1st
// 2nd
// 3rd
// 4th-9th
// 10th-19th
// 20th
// 21st
// 22nd
// 23rd
//
//
// Algorithm
// BEGIN
//   SET century = divide year by 100 & round up if necessary (Math.ceil)
//
//   get the last two digits of century
//   if 2nd to last digit == 1 or last digit == 4-0 add 'th'
//   if last digit == '1' add 'st'
//   if last digit == '2' add 'nd'
//   if last digit == '3' add 'rd'
//
// END

// With if / else statements
function century(year) {
  let century = String(Math.ceil(year / 100));
  let length = century.length;
  let th = ['4', '5', '6', '7', '8', '9', '0'];

  let tensDigit = century[length - 2];
  let onesDigit = century[length - 1];

  if (tensDigit === '1' || th.includes(onesDigit)) return century + 'th';
  else if (onesDigit === '1') return century + 'st';
  else if (onesDigit === '2') return century + 'nd';
  else return century + 'rd';
}

// with a guard clause and case statement
function century(year) {
  let century = String(Math.ceil(year / 100));
  let length = century.length;
  let tensDigit = century[length - 2];
  let onesDigit = century[length - 1];
  let suffix;

  if (tensDigit === '1') return century + 'th'

  switch(onesDigit) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }

  return century + suffix;
}


console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");
