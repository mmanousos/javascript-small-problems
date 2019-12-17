// Problem
// In: array of five values: 1 - 6
// Out: max total value of those five dice throws

// Rules: 
// - any value in the array can only count once
// - groups of 3 of the same number are worth points
// - single 1 or 5 are worth points 
// - any other configuration is worth zero points

// Assumptions: 
// - input will be a valid array of integers from 1-6

// Approach Brainstorming: 
// sort array from lowest to highest
// join into a string 

// use regex to look for \d{3} (three consecutive numbers)
//   use match method to isolate any matching pattern 
//   get first character of match and convert to number 
//   use lookup chart to get value of the match 
//   remove the match from the string 
//   continue trying to match values until string

// create totalScore variable = 0  
// get keys of object
// iterate over keys, checking if any match the string
// if there is a match 
//   add the corresponding value to the totalScore 
//   replace match with '' & continue until all keys have been examined
// return totalScore  

// Data Structure 
// object 

const VALUES = { 111: 1000,
                 666:  600,
                 555:  500,
                 444:  400,
                 333:  300,
                 222:  200,
                   1:  100, 
                   5:   50,
               };

// Algorithm
// BEGIN
//   SET totalScore = 0;
//   SET diceString = dice.sort((a,b) => a-b)).join('');
//   Object.keys(VALUES).forEach((value) => {
//     check if that value exists in string
//       if VALUES[value].match(diceString)
//         totalScore += VALUES[value]
//         diceString.replace(VALUES[value], '');
//   });

//   return totalScore
// END
// => check against test cases
// Does algorithm cover all test cases? 

// const score = function calculateScore(dice) {
//   let totalScore = 0;
//   let diceString = dice.sort((a, b) => a - b).join('');

//   Object.keys(VALUES).forEach((value) => {
//     if (diceString.includes(value)) { // repeat until diceString no longer includes value
//       totalScore += VALUES[value];
//       diceString = diceString.replace(value, '');
//     }
//   });

//   return totalScore;
// };

const score = function calculateScore(dice) {
  let totalScore = 0;
  let diceString = dice.sort((a, b) => a - b).join('');

  Object.keys(VALUES).sort((a, b) => b - a).forEach((value) => {   
    while (diceString.includes(value)) {
      totalScore += VALUES[value];
      diceString = diceString.replace(value, '');
    }
  });

  return totalScore;
};

console.log(score([1, 1, 1, 3, 1])); // 1100
console.log(score([3, 1, 1, 1, 1])); // 1100
console.log(score([2, 4, 4, 5, 4])); // 450
console.log(score([5, 1, 3, 4, 1])); // 250
console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([4, 4, 4, 3, 3])); // 400
console.log(score([2, 4, 4, 5, 4])); // 450