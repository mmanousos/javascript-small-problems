// Letter Swap
// Given a string of words separated by spaces, write a function that swaps the
// first and last letters of every word.

// You may assume that every word contains at least one letter, and that the
// string will always contain at least one word. You may also assume that each
// string contains nothing but words and spaces, and that there are no leading,
// trailing, or repeated spaces.
//
// Problem
// In: string of words
// Out: new string of words with the first and last letter of each word swapped
//
// Rules:
// Notes: case does not change
// Assumptions:
// - no leading, trailing or repeated spaces
// - each string contains at least one word
// - only words and spaces
//
// Approach Brainstorming:
// break each string into an array at the spaces
// iterate over that array
//   break each word into an array of letters
//   destructured reassignment to swap the letters at index[0] and index[array.length - 1]
//   rejoin the word
// rejoin the string and return
//
//
// Examples:
//
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

const swap = function switchEachFirstAndLastLetter(string) {
  const splitString = string.split(' ');
  swapped = splitString.map((word) => {
    const letters = word.split('');
    [letters[0], letters[letters.length - 1]] = [letters[letters.length - 1], letters[0]];
    return letters.join('');
  });
  return swapped.join(' ');
};

console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') == "ebcdA");
console.log(swap('a') === "a");
