// You have to create a function that takes a positive integer number and returns 
// the next bigger number formed by the same digits:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071


// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// Problem
// In: positive integer  
// Out: 
// - positive integer of the same length and same digits, greater than the input
// - or -1

// Rules: 
// - output can only be made up of the same digits as the input 
// - output must be the same length as the input

// Assumptions: 
// - input will be a valid positive integer

// Approach Brainstorming: 
// - increment += 1 from the input 
// until the length of the new value > length of the original input value
// - compare each new value against the digits of the input 
//   - splitting input into an array of digits, sort & merge into a string 
//   - split each new value into an array of digit, sort and merge 
//   compare the two strings 
//   if they are the same, then return the new value 

// return -1 if there no matches


// Example / Tests 
// nextGreatestNumber(12); // ==> 21
// nextGreatestNumber(513); // ==> 531
// nextGreatestNumber(2017); // ==> 2071
// nextGreatestNumber(9); // ==> -1
// nextGreatestNumber(111); // ==> -1
// nextGreatestNumber(531); // ==> -1

// Data Structure 
// Strings 

// Algorithm
// BEGIN
//   input N 
//   SET originalNumberString = String(N).split('').map(Number).sort((a,b) => a - b).join('')
//   SET length = originalString.length
  
//   while (true) {
//     SET newValue = N += 1;
//     SET newValueString = String(newValue).split('').map(Number).sort((a, b) => a - b).join('');

//     if (newValueString === originalNumberString) {
//       return newValue;
//     }

//     if (newValueString.length > length) break;
//   }

//   return -1;
// END
// => check against test cases
// Does algorithm cover all test cases? 

function stringFromNumber(number) {
  return String(number).split('').map(Number).sort((a, b) => a - b).join('');
}

function nextGreatestNumber(number) {
  const originalNumberString = stringFromNumber(number)
  const length = originalNumberString.length;

  while (true) {
    number += 1;
    let newValueString = stringFromNumber(number);

    if (newValueString === originalNumberString) {
      return number;
    }

    if (newValueString.length > length) break;
  }

  return -1;
}


console.log(nextGreatestNumber(12)); // ==> 21
console.log(nextGreatestNumber(513)); // ==> 531
console.log(nextGreatestNumber(2017)); // ==> 2071
console.log(nextGreatestNumber(9)); // ==> -1
console.log(nextGreatestNumber(111)); // ==> -1
console.log(nextGreatestNumber(531)); // ==> -1
console.log(nextGreatestNumber(4716870)); // 4717068
console.log(nextGreatestNumber(9250752)); // 9252057
console.log(nextGreatestNumber(392)); // 923
console.log(nextGreatestNumber(787)); // 877
console.log(nextGreatestNumber(1583)); // 1835