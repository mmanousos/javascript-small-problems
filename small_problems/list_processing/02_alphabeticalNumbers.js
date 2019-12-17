// Alphabetical Numbers
// Write a function that takes an array of integers between 0 and 19, and 
// returns an array of those integers sorted based on the English word for each 
// number:

  // zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Example:

// Problem
// In: array of integers between 0 - 19
// Out: array of the same integers but sorted based on the english word for the number

// Approach Brainstorming:
// define a constant that correlates each word value to its corresponding integer
// use sort to determine the appropriate order


// Algorithm
// BEGIN

// END

// const NUMBER_WORDS = {  0: 'zero', 
//                         1: 'one', 
//                         2: 'two', 
//                         3: 'three', 
//                         4: 'four', 
//                         5: 'five', 
//                         6: 'six', 
//                         7: 'seven', 
//                         8: 'eight', 
//                         9: 'nine', 
//                         10: 'ten', 
//                         11: 'eleven', 
//                         12: 'twelve', 
//                         13: 'thirteen', 
//                         14: 'fourteen', 
//                         15: 'fifteen', 
//                         16: 'sixteen', 
//                         17: 'seventeen', 
//                         18: 'eighteen', 
//                         19: 'nineteen',
//                      }

// const alphabeticNumberSort = function sortByAlphabeticNumber(integers) {
//   return integers.sort((a, b) => {
//     if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
//       return -1;
//     } else if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// };


const alphabeticSort = function sortNumbersByWords(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
                        'thirteen', 'fourteen', 'fifteen', 'sixteen', 
                        'seventeen', 'eighteen', 'nineteen'];
  
  if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else {
    return 0;
  }
};

const alphabeticNumberSort = function sortByAlphabeticNumber(integers) {
  return integers.sort(alphabeticSort);
};

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
