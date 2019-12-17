// The End is Near But Not Here
// The penultimate function takes a string as an argument and returns the
// next-to-last word in the string. The function assumes that "words" are any
// sequence of non-whitespace characters. The function also assumes that the
// input string will always contain at least two words. The penultimate
// function in the example below does not return the expected result. Run the
// code below, check the current result, identify the problem, explain what the
// problem is, and provide a working solution.

// Examples:

// function penultimate(string) {
//   return string.split(' ')[-2];
// }
//
// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"

// Both function calls return `undefined` because there is no such property as
// '-2' that can be referenced for the array created when the
// String.prototype.split() method is called on the string argument.
// to correct for this, we can define a variable that holds the value of
// `array.length - 2`
// then we can use that to access the correct element of the split string array

function penultimate(string) {
  let stringArr = string.split(' ');
  let index = (stringArr.length - 2);
  return stringArr[index];
}

// or we can simply use stringArr.length - 2 and skip assigning the variable index

function penultimate(string) {
  let stringArr = string.split(' ');
  return stringArr[stringArr.length - 2];
}


console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
