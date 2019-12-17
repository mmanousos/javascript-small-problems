// Lettercase Counter
// Write a function that takes a string and returns an object containing three 
// properties: one representing the number of characters in the string that are 
// lowercase letters, one representing the number of characters that are 
// uppercase letters, and one representing the number of characters that are 
// neither.

//   Examples:

// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// Problem
// In: string
// Out: object with counts of uppercase, lowercase, and non-letter characters

// Assumptions: arguments are valid strings

// Approach Brainstorming:
// create counts object with each property set to value of 0
// split string into array of characters

// iterate through characters
//   if character matches (/[a-z]/)
//     increment lowercase
//   if character matches (/[A-Z]/)
//     increment uppercase
//   else [(/[^a-z]/i)]
//     increment neither
// return counts object 

// use reduce x3
// sum, character 
//   if character.match(pattern) 
//   sum += 1


// Algorithm
// BEGIN
//   reduce callback

//   function count(sum, character, pattern) {
//     if (character.match(pattern)) {
//       sum += 1;
//     }
//     return sum;
//   }
// END

// function countCharacterType(sum, character, pattern) {
//   if (character.match(pattern)) {
//     sum += 1;
//   }
//   return sum;
// }

// function letterCaseCount(str) {
//   const counts = { lowercase: 0, uppercase: 0, neither: 0 };
//   const letters = str.split('');
//   counts.lowercase = letters;

//   return counts;
// }

// my solution
function letterCaseCount(str) {
  const counts = { lowercase: 0, uppercase: 0, neither: 0 };
  const characters = str.split('');
  characters.forEach((char) => {
    if (char.match(/[a-z]/)) counts.lowercase += 1;
    else if (char.match(/[A-Z]/)) counts.uppercase += 1;
    else counts.neither += 1;
  });
  return counts;
}

// Course Solution
function letterCaseCount(string) {
  var lowerArray = string.match(/[a-z]/g) || [];
  var upperArray = string.match(/[A-Z]/g) || [];
  var neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}

// borrowing from Nathan Classen's solution
function letterCaseCount(str) {
  let charCount = pattern => pattern.test(str) ? str.match(pattern).length : 0;

  return { lowercase: charCount(/[a-z]/g),
           uppercase: charCount(/[A-Z]/g),
           neither: charCount(/[^a-zA-Z]/g),
         }
}       

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }