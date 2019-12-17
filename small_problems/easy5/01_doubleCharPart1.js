// Double Char Part 1
// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

// Examples:
//
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

// Problem
// In: string
// Out: new string with every character repeated
//
// Approach Brainstorming:
// break string into array of strings
// map each element to be element + element
// join back to a single string and return

const repeater = function repeateEveryLetter(string) {
  return string.split('').map((el) => el + el).join('');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// other students' solutions
// Xullnn - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
function repeater(str) {
  return str.replace(/(.)/g, '$&$&');
}

// Kurth O'Connor
function repeater(str) {
  return Array.from(str, char => char + char).join('');
}
