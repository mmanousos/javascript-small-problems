// Letter Counter Part 1
// Write a function that takes a string consisting of one or more space
// separated words, and returns an object that shows the number of words of
// different sizes.

// Words consist of any sequence of non-space characters.

// Examples:
//
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

// Problem
// In: string of one or more words separated with spaces
// Out: object with length of words as keys and count of how many of each as values
//
// Assumptions: only spaces and non-space characters
//
// Approach Brainstorming:
// create counts object
// split string into array
// iterate over array examining length of each word
// if object[length] exists, += 1
// else object[length] = 1
//
// return counts object

const wordSizes = function countLengthOfEachWord(string) {
  const counts = {};
  if (string.length === 0) return counts;

  const words = string.split(' ');
  // words.forEach((word) => counts[word.length] ? counts[word.length] += 1 : counts[word.length] = 1);
  words.forEach((word) => counts[word.length] = counts[word.length] ? +1 : 1);
  // words.forEach((word) => (counts[word.length] += 1) || (counts[word.length] = 1));

  return counts;
};


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
