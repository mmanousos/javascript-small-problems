// 1000 Lights
// You have a bank of switches before you, numbered from 1 to n. Every switch is 
// connected to exactly one light that is initially off. You walk down the row 
// of switches and toggle every one of them. You walk back to the beginning of 
// the row and start another pass. On this second pass, you toggle switches 2, 
// 4, 6, and so on. On the third pass, you go back to the beginning again, this 
// time toggling switches 3, 6, 9, and so on. You continue to repeat this 
// process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and 
// returns an array of the lights that are on after n repetitions.

// Problem
// In: number n representing the number of times we will walk through the light switches and turn them on and off
// Out: array of numbers representing which lights are still on after n passes

// Rules: 
// Notes:
// - based on the two examples given, only perfect square values upto and including n will be returned

// Assumptions: 
// - n will be a positive integer

// Approach Brainstorming:
// calculate perfect squares upto and including n

// Example / Tests
// lightsOn(5);        // [1, 4]
// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// lightsOn(25);       // [1, 4, 9, 16, 25]

// Data Structure
// array

// Algorithm
// BEGIN
//   set results = []
//   for (1..n)
//     if Number.isInteger(Math.sqrt(i))
//       add i to results
//   return results  
// END
//   => check against test cases
// Does algorithm cover all test cases? 

// Examples:

// using a loop
function lightsOn(switches) {
  const results = [];
  let i = 1;
  while (i <= switches) {
    if (Number.isInteger(Math.sqrt(i))) {
      results.push(i);
    }
    i += 1;
  }
  return results;
}

// using `Array.prototype.filter`
function lightsOn(switches) {
  const allLights = Array.from(new Array(switches), (x, i) => i + 1);
  return allLights.filter((light) => Number.isInteger(Math.sqrt(light)));
}

// lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(25));       // [1, 4, 9, 16, 25]