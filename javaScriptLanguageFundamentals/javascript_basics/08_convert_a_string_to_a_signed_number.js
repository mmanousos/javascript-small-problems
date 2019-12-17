// Convert a String to a Signed Number
// The previous exercise mimics the parseInt function to a lesser extent. In
// this exercise, you're going to extend that function to work with signed
// numbers.
//
// Write a function that takes a string of digits, and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the first
// character is a +, your function should return a positive number; if it is a
// -, your function should return a negative number. If there is no sign,
// return a positive number.
//
// You may assume the string will always contain a valid number.
//
// Examples:
//
// stringToSignedInteger('4321');      // 4321
// stringToSignedInteger('-570');      // -570
// stringToSignedInteger('+100');      // 100

// Problem
// in: string number with an optional + / - as first character
// out: positive or negative number
//
// Example / Tests
// stringToSignedInteger('4321');      // 4321
// stringToSignedInteger('-570');      // -570
// stringToSignedInteger('+100');      // 100
//
// Algorithm
// BEGIN
//   SET negative = false;
//   SET result = 0;
//   SET DIGITS = object of string number keys with numbers as values
//   IF first character is '-'
//     negative = true;
//   END
//   Iterate over string number argument
//     CONTINUE IF first character is '+' / '-'
//     result = 10 * result + number value from DIGITS
//   END
//
//   IF negative
//     return result * -1
//   ELSE
//     return result
//   END
// END


let DIGITS = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
                '8': 8, '9': 9, };

function stringToSignedInteger(string) {
  let negative = false;

  if (string[0] == '-') { negative = true; }

  let result = 0;
  for (let i = 0; i < string.length; i += 1) {
    if ((string[i] == '+') || (string[i] == '-')) {
      continue;
    }
    result = 10 * result + DIGITS[string[i]];
  }

  if (negative) {
    result = result * -1;
  }

  return result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

// Course Solution
// uses solution from previous exercise more explicitly, passing parsed string
// to stringToInteger function

// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case '-': return -stringToInteger(string.slice(1));
//     case '+': return stringToInteger(string.slice(1));
//     default:  return stringToInteger(string);
//   }
// }
