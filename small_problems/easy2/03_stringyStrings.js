// Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a
// string of alternating '1's and '0's, always starting with a '1'. The length
// of the string should match the given integer.
//
// Examples:
//
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"
//
// Problem
// in: positive integer
// out: string of '1's and '0's where length = positive integer & starts with '1'
//
// Algorithm
// BEGIN
//   input: integer
//   SET result = ''
//   until length of result = integer
//     IF result[-1] = '1'
//       add '0' to result
//     ELSE
//       add '1' to result
//     END
//   return result
// END

function stringy(number) {
  let result = '';
  for (let i = 0; i < number; i += 1) {
    result += result[i - 1] === '1' ? '0' : '1';
  }
  return result;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");
