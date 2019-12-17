// Palindromic Substrings
// Write a function that returns a list of all substrings of a string that are 
// palindromic. That is, each substring must consist of the same sequence of 
// characters forwards as backwards.The substrings in the returned list should 
// be sorted by their order of appearance in the input string. Duplicate 
// substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous 
// exercise.

// For the purpose of this exercise, you should consider all characters and pay 
// attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' 
// are not. In addition, assume that single characters are not palindromes.

  // Examples:

// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// ["ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo"]

// palindromes('knitting cassettes');
// // returns
// ["nittin", "itti", "tt", "ss", "settes", "ette", "tt"]

// Problem
// In: string
// Out: palindromic substrings in order of appearance, including any duplicates

// Rules: 
// - must be in order of appearance
// - duplicates should be included
// - single characters are not palindromes

// Notes:
// - case and non-letter characters must be considered (exact matches only)

// Assumptions: 
// - input string will not be empty
// - input will be a valid string

// Approach Brainstorming:
// - generate array of all substrings 
// - filter for palindromes and return

// palindromes brainstorming
//  - given string 
//  - split to array of characters
//   - reverse array and rejoin 
//  - compare reversed with string

// Data Structure
// array


const substringsAtStart = function substringsToArray(string) {
  return string.split('').map((_, index) => string.substring(0, index + 1));
};

const substrings = function allSubstrings(string) {
  return string.split('').map((_, idx) => {
    return substringsAtStart(string.substring(idx));
  }).flat();
};

const isPalindrome = function greaterThanOneCharacterAndSameReversed(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

const palindromes = function palindromicSubstrings(string) {
  return substrings(string).filter(isPalindrome);
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// ["ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo"]

console.log(palindromes('knitting cassettes'));
// returns
// ["nittin", "itti", "tt", "ss", "settes", "ette", "tt"]
