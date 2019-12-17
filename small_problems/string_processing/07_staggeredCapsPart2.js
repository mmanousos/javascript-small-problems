// Staggered Caps Part 2
// Modify the function from the previous exercise so that it ignores 
// non-alphabetic characters when determining whether a letter should be upper 
// or lower case. Non-alphabetic characters should still be included in the 
// output string, but should not be counted when determining the appropriate 
// case.

// Examples:

// staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
// staggeredCase('ALL CAPS');                     // "AlL cApS"
// staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"

// Problem
// In: string
// Out: string with every other letter capitalized, but count skips non-letter characters

// Assumptions: input is a valid string

// Approach Brainstorming:
// break string into array of characters 
// create uppercase variable, set to true
// map over array,
//   if character is a letter, and uppercase === true
//     return character.toUpperCase()
//     uppercase = false
//   else if character is a letter, and uppercase !== true
//     return character.toLowerCase()
//     uppercase = true
//   else if character is not a letter
//     return character
// join('') and return

function staggeredCase(string) {
  let uppercase = true;  
  return string
          .split('')
          .map((character) => {
            if (/[a-zA-Z]/.test(character) && uppercase) {
              uppercase = false;
              return character.toUpperCase();
            } else if (/[a-zA-Z]/.test(character) && !uppercase) {
              uppercase = true;
              return character.toLowerCase();
            } else if (/[^a-zA-Z]/.test(character)) {
              return character;
            }  
          })
          .join('');
}

// Course Solution - similar logic to mine but streamlined with nested if/else
function staggeredCase(string) {
  var needUpper = true;
  var newChar;

  return string.split('').map(function (char) {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"