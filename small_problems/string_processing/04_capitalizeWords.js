// Capitalize Words
// Write a function that takes a string as an argument, and returns that string 
// with the first character of every word capitalized and all subsequent characters 
// in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// Examples:

// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// Problem
// In: string
// Out: new string with the first letter of each word capitalized

// Rules: "word" = sequence of non-whitespace characters
// Assumptions: input will be valid strings

// Approach Brainstorming:

// Approach 1
// split string on whitespaces ' '
// map capitalizing the 0 character of each word
//   word[0] = word[0].toUpperCase() + word.substring(1)
// join and return  

// Approach 2
// use RegEx:
// find the first letter character, followed by zero or more characters up to the word boundary
// replace it with the capitalized version of those characters, followed by the additional characters
// replace /\b([a-z])(.*)\b/g, '$1.toUpperCase$2' */

function wordCap(string) {
  return string
    .split(' ')
    .map((word) => {
      return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
    })
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'