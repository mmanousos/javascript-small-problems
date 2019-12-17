// Palindromic Number
// Write a function that returns true if its integer argument is palindromic, or
// false otherwise. A palindromic number reads the same forwards and backwards.

// Examples:
//
// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

// convert number to string
// build new string that is reverse of original string
// compare two strings for equality

// const isPalindromicNumber = function(number) {
//   const string = String(number);
// console.log(string);
//   return string === string.split('').reverse().join('');
// }
//
//
// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// Further Exploration
// Suppose the number argument begins with one or more 0s. Will the solution
// still work? Why or why not? Is there any way to address this?

// guessing no. `0`s will be dropped from the front of the string when
// converting
// actual: not only are the leading zeros dropped, the number itself is changed!
// isPalindromicNumber(0034543); // string version: '14691'

// there doesn't seem to be a good way to solve for this.
