// Lettercase Percentage Ratio
// Write a function that takes a string, and returns an object containing the 
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Problem
// In: string
// Out: percentage of uppercase, lowercase and non-letter characters in an object

// Rules: 

// Notes: 
// - return object with keys as 'lowercase:' 'uppercase:' 'neither:'
// - percentages are represented as strings with two decimal points 
// - all non-letter characters are consider 'neither', including spaces
// - all three categories should have values, even if that value is '0.00'

// Assumptions: 
// - string will contain at least one character

// Approach Brainstorming: 
// create results object with keys 'lowercase:' 'uppercase:' and 'neither:'
// get length of string
// use RegExp match to get arrays of all matching lowercase uppercase and non letter characters
//   return match or []
// get length of each match and divide by length of string
//   multiply by 100, and convert to string preserving 2 decimal places
//   toFixed(2)

// Example / Tests 

// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


// Data Structure 
// string & object

// Algorithm
// BEGIN
//   len = string.length
//   lower = string.match(/[a-z]/g) || []
//   upper = string.match(/[A-Z]/g) || []
//   neither = string.match(/[a-z]/gi) || []
//   percentages = { }


//   findCharacters(string, pattern) {
//     returns array of characters
//   }

//   calculatePercentages(matches, totalLength) {
//     gets length of match array
//     divides by length of original string
//     multiplies by 100 and converts to a string, preserving 2 decimal places
//     returns percentage as string
//   }

//   return percentages
// END
// => check against test cases
// Does algorithm cover all test cases? 

function characters(string, pattern) {
  return string.match(pattern) || [];
}

function percentage(matches, totalLength) {
  return ((matches.length / totalLength) * 100).toFixed(2);
}

function letterPercentages(string) {
  let len = string.length;
  let lowercase = characters(string, /[a-z]/g);
  let uppercase = characters(string, /[A-Z]/g);
  let neither = characters(string, /[^A-Z]/ig);

  return { lowercase: percentage(lowercase, len),
           uppercase: percentage(uppercase, len),
           neither: percentage(neither, len),
         };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }