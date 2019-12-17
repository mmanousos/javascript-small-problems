// Write a function that takes in a positive parameter num and returns its 
// multiplicative persistence, which is the number of times you must multiply the 
// stringDigits in num until you reach a single stringDigit.

// Problem
// In: single number (num)
// Out: multiplicative persistence (number of times the stringDigits must be multipled to reach a single stringDigit)

// Rules: 
// Notes: 
// counter to keep track of the stringDigit multiplication
// function is spliting the stringDigits and multiplying them together

// Assumptions: 
// - assume num is an integer
// - since 0 is a single stringDigit, output should also be 0

// Approach Brainstorming: 
// counter = 0

// function to convert and check length
// convert the number to a string
//   - check the length of the string to determine the number of stringDigits 
//   guard clause (if length === 1), return counter

// while length > 1
// function to split and do multiplication 
// use split() to create an array of stringDigits
// convert those stringDigits back to numbers for multiplication (map)
// reduce to multiply all of the stringDigits 
// increment the counter 

// check the number of stringDigits of the product after reducing
// convert the number to a string 
//   if it's 1, return counter 

// otherwise repeat 

// Algorithm
// BEGIN
//   SET counter = 0

//   argument num 

//   convert num to string
//   SET length = stringNum.length

//   while (length > 1)
//     split stringNum to any array of string stringDigits
//     map string stringDigits to numbers 
//     reduce array of stringDigits using multiplication
//     increment counter += 1

//     // check the length of the reduced product 
//     convert the product to a string
//     length = stringProduct.length
//   END  

//   return counter
// END

const persistence = function multiplicativePersistence(num) {
  let counter = 0;

  let stringNum = String(num);
  let length = stringNum.length;

  while (length > 1) {
    let digits = stringNum.split('').map(Number);
    let product = digits.reduce((product, currentValue) => product * currentValue);
    counter += 1;
    stringNum = String(product);
    length = stringNum.length;
  }

  return counter;
};


console.log(persistence(39) === 3); // because 3*9 = 27, 2*7 = 14, 1*4 = 4 => 4 has only one stringDigit
console.log(persistence(999) === 4); // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
console.log(persistence(4) === 0); // because 4 is already a one-stringDigit number
console.log(persistence(25) === 2);

