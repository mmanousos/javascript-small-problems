// Clean Up the Words
// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with all
// of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occur in a row, you should only have one space in
// the result (i.e., the result string should never have consecutive spaces).

// Problem
// in: string containing words and non-alphabetic characters
// out: string with same words but all non-alphabetic characters replaced by a single space
//
// use RegEx to find non letter characters
//
// Algorithm
// BEGIN
//   string = replace non letter characters (single or groups of consecutive) with ' '
// END

function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
