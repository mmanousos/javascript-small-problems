// Word to Digit
// Write a function that takes a sentence string as an argument, and returns 
// that string with every occurrence of a "number word" — 'zero', 'one', 'two', 
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its 
// corresponding digit character.

// Problem
// In: string of words containing word reprsentations of number digits
// Out: string with the word numbers converted to actual numbers

// Rules: 
// - replace all number words (global replacement)

// Assumptions: 
// - input will not be empty
// - input will be a valid string

// Approach Brainstorming: 
// use an array of digit word values
// iterate over the array of digit words
// do a global replace 
//   if the word exists in the string, replace it with its corresponding array number

// Example / Tests 


// Data Structure 
// Array

// Algorithm
// BEGIN
// input string
// digitWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// digitWords.forEach((word, index) => {
//   string = string.replace(word, index);
// });

// return string
// END
// => check against test cases
// Does algorithm cover all test cases? 

function wordToDigit(string) {
  const digitWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                      'seven', 'eight', 'nine'];
  digitWords.forEach((word, index) => {
    string = string.replace(new RegExp('\\b' + word + '\\b', 'gi'), index);
  });                    

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit(''));  // ""
console.log(wordToDigit('The number is SEVEN FOUR FIVE.'));
// "The number is 7 4 5."
console.log(wordToDigit('He was Eight Two years old.'));
// "He was 8 2 years old."
console.log(wordToDigit("Who's going to take the weight?"));
// "Who's going to take the weight?"

// Further Exploration
// Can you refactor the function so that it does not use a loop?

// Xullnn's solution - replacement without a loop
var numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var regex = new RegExp(`(${numStrings.join('|')})`, 'ig')

function wordToDigit(str) {
  return str.replace(regex, (match => numStrings.indexOf(match)));
}