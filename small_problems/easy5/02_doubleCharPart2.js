// Double Char Part 2
// Write a function that takes a string, doubles every consonant character in
// the string, and returns the result as a new string. The function should not
// double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// Examples:
//
// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""

// Problem
// In: string
// Out: new string with only consonants doubled (not vowels, digits, punctuation, or spaces)
//
// Approach Brainstorming:
// break string into array of characters
// map over characters
//  if character is a consonant, double it, otherwise, return character
// join and return
//
// consonants: b-d, f-h, j-n, p-t, v-z

const doubleConsonants = function(string) {
  return string.split('').map((char) => {
    return (char.match(/[b-df-hj-np-tv-z]/i)) ? char + char : char;
  }).join('');
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

// Kurth OConnor's solution
function doubleConsonants(str) {
  return str.replace(/([b-df-hj-np-tv-z])/gi, '$1$1');
}
