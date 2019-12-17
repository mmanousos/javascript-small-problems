// Letter Counter Part 2
// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of "it's"
// is 3, not 4.

// Examples:
//
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
// wordSizes('');                                            // {}

// create new string for each word that contains only letter characters present in the word

const wordSizes = function countLengthOfEachWord(string) {
  const counts = {};
  if (string.length === 0) return counts;

  const words = string.split(' ');
  words.forEach((word) => {
    word = word.match(/[a-z]/gi).join('');
    counts[word.length] = counts[word.length] ? +1 : 1;
  });

  return counts;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
