// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this 
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that 
// do not use both letters from any given block. You can also only use each 
// block once.

// Write a function that takes a word string as an argument, and returns true if 
// the word can be spelled using the set of blocks, or false otherwise. You can 
// consider the letters to be case-insensitive when you apply the rules.

// Examples:

// Problem
// In: string
// Out: boolean representing if the word can be spelled using the letter blocks
// - meaning none of the letters appear in a single key-value pair
// - also there are no duplicate letters

// Rules:
// - words can not use both letters from one block 
// - letters can only be used once

// Notes:
// - search for any letters that occur more than once and return false immediately

// Assumptions:
// - words will be valid strings
// - case is not important

// Approach Brainstorming:
// guard clause to check if any letters occur more than once -> return false immediately

// Approach 1
// iterate through characters of string;
//   get corresponding letter from lookup table
//     if letter is included in the string, return false
// return true 

// Approach 2
// iterate through keys of block
//   if both key and value are included in the word, return false
// return true  


// Example / Tests
// // isBlockWord('BATCH');      // true
// // isBlockWord('BUTCH');      // false
// // isBlockWord('jest');       // true
// // isBlockWord('zebra');      // true
// // isBlockWord('assign');     // false

// Data Structure
// object for the block values
// regexp and string for the word

// Algorithm
// BEGIN
// blocks = { B: 'O',   X: 'K',   D: 'Q',   C: 'P',   N: 'A',
//            G: 'T',   R: 'E',   F: 'S',   J: 'W',   H: 'U',
//            V: 'I',   L: 'Y',   Z: 'M',
//           }

//   letters = word.split('').sort().join('')
//   if letters.match(/([a-z])\1/i) 
//     return false

//  blockKeys = Object.keys(blocks);
//  use `some` to check if any of the blockKeys and corresponding values both exist in word
//           word.match(new RegExp(key, 'gi')) && word.match(new RegExp(blocks[key], 'gi'))

// END
// //   => check against test cases
// // Does algorithm cover all test cases ? 

const blocks = { B: 'O',   X: 'K',   D: 'Q',   C: 'P',   N: 'A',
                 G: 'T',   R: 'E',   F: 'S',   J: 'W',   H: 'U',
                 V: 'I',   L: 'Y',   Z: 'M',
               };

function isBlockWord(word) {
  const letters = word.split('').sort().join('');
  if (letters.match(/([a-z])\1/i)) return false;

  const blockKeys = Object.keys(blocks);
  return blockKeys.every((key) => {
    if ((new RegExp(key, 'gi')).test(word) && 
        (new RegExp(blocks[key], 'gi')).test(word)) {
      return false;
    } else {
      return true;
    }
  });
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('zebra'));      // false
console.log(isBlockWord('assign'));     // false

