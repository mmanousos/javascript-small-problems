// Staggered Caps Part 1
// Write a function that takes a string as an argument, and returns that string 
// with a staggered capitalization scheme. Every other character, starting from 
// the first, should be capitalized and should be followed by a lowercase or 
// non-alphabetic character. Non-alphabetic characters should not be changed, 
// but should be counted as characters for determining when to switch between 
// upper and lower case.

// Examples:

// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"

// Problem
// In: string
// Out: new string with staggered capitalization 

// Rules: 
// - first letter is capitalized
// - second letter is not capitalized
// - non-alphabetic characters remain unchanged but are counted in the 
// capitalization pattern

// Assumptions: input is valid string

// Approach Brainstorming:
// split string into array of characters ('')
// map over characters, 
//   if index is positive, toUpperCase
//   else toLowerCase
// join ('') and return  

function staggeredCase(string) {
  return string
          .split('')
          .map((character, index) => {
            if (index % 2 === 0) return character.toUpperCase();
            else return character.toLowerCase();
          })
          .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"