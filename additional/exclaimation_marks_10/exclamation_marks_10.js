// Problem
// In: 
// - string of words (sets of characters separated by a single white space) 
// - each word is surrounded by 0 or more exclamation marks
// Out: 
// - same string of words but with exclamation marks removed so that the number of 
// exclamation marks on either side are matched

// // Rules: 
// - only remove - do not append 

// // Notes: 
// - split into an array to assess each word separately
// - can have zero exclamation marks & that is considered equal

// // Assumptions: 
// - input will be a valid string 
// - only punctuation will be '!'

// Approach Brainstorming: 
// split string on ' ' to get array of words
// map over array of words
//   - check if number of '!' === 0
//       word.match(/\!/g) === null
//     - if yes, return word 
//     - if no, check if they're balanced
//         - get count of letter characters 
//         - split word into characters
//         - iterate over characters until char !== '!'
//           let frontCounter = index (# of ! in front)
//         - get number of remaining !
//           let rearCounter = word.length - letter characters & frontCounter
          
//           if frontCounter === rearCounter 
//       if yes, return word
//       if no, remove some
//          if frontCounter > rearCounter 
//            return word.slice(frontCounter - rearCounter)
//           else
//             return word.slice(word.length - (rearCounter -frontCounter))

// Example / Tests 
// remove("Hi!") === "Hi"
// remove("!Hi! Hi!") === "!Hi! Hi"
// remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
// remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"

// Data Structure 
// String and Array

const noPoints = function checkForExclamationPoints(string) {
  return string.match(/\!/g) === null;
}

const calculateFront = function findFirstNonPoint(word) {
  let frontCounter = 0;
  while (word[frontCounter] === '!') {
    frontCounter += 1;
  }
  return frontCounter;
}

const balancePoints = function removeSomePoints(word, front, rear) {
  if (front > rear) {
    return word.slice(front - rear);
  } else {
    return word.slice(0, word.length - (rear - front));
  }  
}

const remove = function removeUnbalancedExclamationPoints(string) {
  if (noPoints(string)) return string;
  
  let words = string.split(' ');
  words = words.map((word) => {
    if (noPoints(word)) return word;

    let letterCount = word.match(/[a-z]/gi).length;
    let frontCounter = calculateFront(word);
    let rearCounter = word.length - letterCount - frontCounter;

    if (frontCounter === rearCounter) {
      return word;
    } else {
      return balancePoints(word, frontCounter, rearCounter);
    }  
  });

  return words.join(' ');
};

console.log(remove("Hi!") === "Hi");
console.log(remove("!Hi! Hi!") === "!Hi! Hi");
console.log(remove("!!Hi! !Hi!!")  === "!Hi! !Hi!");
console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!");