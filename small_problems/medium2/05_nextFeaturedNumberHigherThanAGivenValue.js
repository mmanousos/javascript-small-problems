// Next Featured Number Higher than a Given Value
// A 'featured number' (something unique to this exercise) is an odd number that 
// is a multiple of 7, with all of its digits occuring exactly once each. For 
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not 
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next 
// featured number greater than the integer. Issue an error message if there is 
// no next featured number.

// Problem
// In: integer
// Out: next featured number greater than the integer or error message 
// if no next featured number

// Rules: 
// Featured numbers are:
// - odd
// - multiple of 7
// - each digit occurs exactly once

// Assumptions: 
// - input will be valid integer
// - input can be negative or positive 

// Approach Brainstorming: 
// starting at number, increment by 1
//   check if it is a featured number
//     num % 7 === 0 
//     num % 2 === 1
//     hasDuplicates

// function hasDuplicates(num) {
//   let digits = String(num).split('');
//   for (let i = 0; i < digits.length; i += 1) {
//     if (digits.slice(i + 1).includes(digits[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// if none are true, return num
// if num >= 1234567890 return 'There is no next featured number.'

// optimizations -> 
//   find next odd number and increment by 2
//   find next product of 7 and increment by 7

// Example / Tests 
// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987


// Data Structure 
// Number 

function hasDuplicates(num) {
  let digits = String(num).split('');
  for (let i = 0; i < digits.length; i += 1) {
    if (digits.slice(i + 1).includes(digits[i])) {
      return true;
    }
  }
  return false;
}

function findSeven(integer) {
  while (integer % 7 !== 0) {
    integer += 1
  }
  return integer;
}

function findOddSeven(integer) {
  integer += 1;
  while ((integer % 2 !== 1) || (integer % 7 !== 0)) {
    integer += 1;
  }
  return integer
}

// function featured(integer) {
//   let num = integer + 1;
//   while (num < 9007199254740991) {
//     if (num % 2 === 1 && num % 7 === 0 && !hasDuplicates(num)) {
//       return num;
//     }
//     num += 1;
//   }
//   return new Error('There is no next Featured Number.');
// }

// // first optimization - iterate through odd numbers only
// function featured(integer) {
//   let num = integer % 2 === 1 ? integer + 2 : integer + 1;
//   while (num < 9007199254740991) {
//     if (num % 7 === 0 && !hasDuplicates(num)) {
//       return num;
//     }
//     num += 2;
//   }
//   return new Error('There is no next Featured Number.');
// }

// // second optimization - iterate through multiples of 7 only (+= 7)
// function featured(integer) {
//   if (integer >= 9007199254740984) {
//     return new Error('There is no next Featured Number.');
//   }

//   let num = findSeven(integer);
//   while (num) {
//     if (num % 2 === 1 && !hasDuplicates(num)) {
//       return num;
//     }
//     num += 7;
//   }
// }

// third optimization - iterate through multiples of 14 only (+= 14)
function featured(integer) {
  if (integer >= 9007199254740977) {
    return new Error('There is no next Featured Number.');
  }

  let num = findOddSeven(integer);
  while (num) {
    if (!hasDuplicates(num)) {
      return num;
    }
    num += 14;
  }
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9007199254740990));   // Error