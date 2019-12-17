// Swap Case
// Write a function that takes a string as an argument, and returns that string 
// with every lowercase letter changed to uppercase and every uppercase letter 
// changed to lowercase. Leave all other characters unchanged.

// Examples:

// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// Problem
// In: sring with some uppercase and some lowercase characters
// Out: new string with the uppercase characters now lowercase and the lowercase 
// characters now uppercase

// Rules: leave non-letter characters unchanged
// Assumptions: input will be a valid string

// Approach Brainstorming:
// break string into array of characters ('')
// map over array 
//   if character.match(/[a-z]/)
//     return character.toUpperCase();
//   else if character.match(/[A-Z]/)
//     return character.toLowerCase();
//   else
//     return character;
// join array at ('') and return

function swapCase(string) {
  return string
    .split('')
    .map((character) => {
      if (character.match(/[a-z]/)) return character.toUpperCase();
      else if (character.match(/[A-Z]/)) return character.toLowerCase();
      else return character;
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"