// ASCII String Value
// Write a function that determines and returns the ASCII string value of a
// string passed in as an argument. The ASCII string value is the sum of the
// ASCII values of every character in the string.
// (You may use String.prototype.charCodeAt() to determine the ASCII value of a
// character.)

// Problem
// in: string
// out: numeric value representing the sum of the ascii value of each character in the string
//
// Example / Tests
// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0
//
// Data Structure
// string
//
// Algorithm
// BEGIN
//   SET sum = 0;
//   iterate over string
//     convert character to ASCII value and add to sum
//   return sum
// END



function asciiValue(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(asciiValue('Four score') === 984);         // 984
console.log(asciiValue('Launch School') === 1251);      // 1251
console.log(asciiValue('a') === 97);                  // 97
console.log(asciiValue('') === 0);                   // 0
