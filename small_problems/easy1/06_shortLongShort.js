// Short Long Short
// Write a function that takes two strings as arguments, determines the longer
// of the two strings, and then returns the result of concatenating the shorter
// string, the longer string, and the shorter string once again. You may assume
// that the strings are of different lengths.

// Examples:
//
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// Problem
// in: two strings of different lengths
// out: a new string with the shorter string on either side of the longer string with no spaces between them
//
// Example / Tests
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// Data Structure
// strings
//
// Algorithm
// BEGIN
//   SET string = ''
//   compare string1.length to string2.length
//   if string1.length < string2.length
//     string += string1 + string2 + string1
//   else
//     string += string2 + string1 + string2
//   end
//
//   return string
// END

function shortLongShort(str1, str2) {
  let string = '';
  if (str1.length < str2.length) {
    string += str1 + str2 + str1;
  } else {
    string += str2 + str1 + str2;
  }

  return string;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
