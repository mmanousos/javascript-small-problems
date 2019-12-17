// Array and String Reverse
// In this exercise, you will implement your own version of the
// Array.prototype.reverse method. Your implementation should differ from the
// built-in method in the following two ways:
//
// It should accept either a string or an array as an argument.
// It should return a new string or array.

// Problem
// in: string or array
// out: new string or array with original content reversed
//
// Algorithm
// BEGIN
//   check if the argument is an array
//   create a new array or string
//   iterate over the argument from the end
//   for each index value, add that value into the new result holder
//   return the result holder
// END

// My Solution
function reverse(inputForReversal) {
  let results;
  let j = 0;

  results = (Array.isArray(inputForReversal)) ? [] : '';

  for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
    if (typeof results === 'string') {
      results += inputForReversal[i];
    } else {
      results[j] = inputForReversal[i];
      j += 1;
    }
  }

  return results;
}

// Further Exploration - Buggy Course Solution
// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// }
//
// function reverseArray(inputForReversal) {
//   var reversed = [];
//   var length = inputForReversal.length;
//   var i;
//
//   for (i = 0; i < length; i += 1) {
//     reversed[length - i] = inputForReversal[i]; // length - 0 doesn't exist -> pushes empty value to new array
//   }
//
//   return reversed;
// }
//
// function reverseString(inputForReversal) {
//   var stringArray = inputForReversal.split(' '); // doesn't split at each character
//   return reverseArray(stringArray).join(' '); // joins with spaces between
// }

// corrected
// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// }
//
// function reverseArray(inputForReversal) {
//   var reversed = [];
//   var length = inputForReversal.length;
//   var i;
//   var j = 1;
//
//   for (i = 0; i < length; i += 1) {
//     reversed[length - j] = inputForReversal[i];
//     j += 1;
//   }
//
//   return reversed;
// }
//
// function reverseString(inputForReversal) {
//   var stringArray = inputForReversal.split('');
//   return reverseArray(stringArray).join('');
// }

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
