// The alphabetized kata

// Re-order the characters of a string, so that they are concatenated into a new
// string in "case-insensitively-alphabetical-order-of-appearance" order.
// Whitespace and punctuation shall simply be removed!
//
// The input is restricted to contain no numerals and only words containing the
// english alphabet letters.
//
// Problem
// In: string
// Out: new alphetized string - case insensitive, order of appearance
//
// Rules: in order of appearance in the new string
// Assumptions: no numerals, English letters only
//
// Approach Brainstorming:
// define a new empty string
// remove spaces or punctuation from the original string, preserving the case of the string
// regex - return an array split alphabetical characters
// sort might work?
//
// - second Approach
// downcase
// map the characters to their index value
// Then sort by character
// map again to get the original character
// to replace any capitalized characters
//
// - third Approach
// iterate over the array
// index of the various letters
// group all of the similar letters together in order of appearance
// - build substrings of each matching letter
// then sort (how?) alphabetically
// rejoin to a string and return
//
// - fourth approach
// iterate over the alphabet
// any time we encounter the letter of the alphabet, regardless of case
// add that letter to the new string

// const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//                  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
//                  'y', 'z'];

// easier - still can iterate over it in the same way
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const alphabetized = function alphabetizeByOrderOfAppearance(string) {
  let ordered = '';

  for (let i = 0; i < LETTERS.length; i += 1) {
    for (let j = 0; j < string.length; j += 1) {
      if (LETTERS[i] === string[j].toLowerCase()) ordered += string[j]; // add to new string
    }
  }

  return ordered;
};


console.log(alphabetized("The Holy Bible") === "BbeehHilloTy");
