// Reverse It Part 1
// Write a function that takes a string argument, and returns a new string
// containing the words from the string argument in reverse order.

// Examples:
//
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

// Problem
// In: string
// Out: new string with the words in reverse order
//
// Approach Brainstorming:
// use Array.prototype.reverse()

const reverseSentence = function reverseEachWord(string) {
  return string.split(' ').reverse(' ').join(' ');
};

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
