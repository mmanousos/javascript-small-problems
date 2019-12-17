// Counting the Number of Characters
// In this exercise, you will write a program that asks the user for a phrase,
// then outputs the number of characters in that phrase. Go over the
// documentation for String
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
// to find an appropriate method to use.
//
// Examples:
//
// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".
//
// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".

let input = prompt('Please enter a phrase: ');
console.log(`There are ${input.length} characters in "${input}".`);


// Further Exploration
// The solution counts all the characters in the phrase, including spaces.
// Refactor it so that it ignores spaces.
//
// Since the refactored program shouldn't count spaces, you can use the
// String.prototype.replace method to return a new string with all spaces
// removed from it. Go over the documentation to see how you can do this. The
// thing to note here is that the first argument passed to replace can be a
// regular expression (https://launchschool.com/books/regex) pattern.

let input = prompt('Please enter a phrase: ');
let noSpaces = input.replace(/[ ]/g, '');
console.log(`There are ${noSpaces.length} characters in "${input}" (not counting spaces).`);

// As an added challenge, further refactor the solution so that it only counts
// alphabetic characters.

let input = prompt('Please enter a phrase: ');
let onlyLetters = input.replace(/[^a-z]/ig, '');
console.log(`There are ${onlyLetters.length} characters in "${input}" (not counting spaces).`);
