// Convert a String to a Number
// For this exercise we're going to learn more about type conversion by
// implementing our own `parseInt` function that converts a string of numeric
// characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the
// appropriate number. Do not use any of the built-in functions for converting
// a string to a number type.

// For now, do not worry about leading `+` or `-` signs, nor should you worry
// about invalid characters; assume all characters will be numeric.

// Examples:
//
// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570

// Problem
// in: string with or without a leading + or -
// assume: all input will be valid numeric characters or + / -
// out: number

// restriction: do not use built-on string to number conversion functions

// Example / Tests
// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570
//
// Data Structure
// array
//
// Algorithm
// BEGIN
//   SET argument numerical string input = string
//   SET object referencing string version of number key to numeric version of number value
//   SET result value = 0
//   iterate over string number, reference corresponding number from object, add to result
// END

let DIGITS = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
                '8': 8, '9': 9, };

function stringToInteger(string) {
  let result = 0;
  for (let i = 0; i < string.length; i += 1) {
    result = 10 * result + DIGITS[string[i]];
  }
  return result
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));  
