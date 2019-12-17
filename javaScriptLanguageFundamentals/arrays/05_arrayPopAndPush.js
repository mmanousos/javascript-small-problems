// Array Pop and Push
// In this exercise, you will implement your own version of two Array methods:
// Array.prototype.pop and Array.prototype.push. The pop method removes the last
// element from an array and returns that element. If pop is called on an empty
// array, it returns undefined. The push method, on the other hand, adds one or
// more elements to the end of an array and returns the new length of the array.

const pop = function removeLastValueFromArray(array) {
  const length = array.length;
  if (length === 0) return undefined;

  const finalValue = array[length - 1];
  array.length = (length - 1);

  return finalValue;
};

// Further Exploration - buggy Course Solution
// goes too far and tries to grab an array element that is not present
// also uses the incorrect syntax for `splice` - square brackets instead of parentheses

// function pop(array) {
//   var poppedElement = array[array.length];
//   array.splice[array.length];
//
//   return poppedElement;
// }

// corrected:
// function pop(array) {
//   var poppedElement = array[array.length - 1];
//   array.splice(array.length - 1);
//
//   return poppedElement;
// }
//
// // pop
// var array = [1, 2, 3];
// console.log(pop(array));                        // 3
// console.log(array);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]


const push = function addValuesToEndOfArray(array, ...arguments){
  let arrLength = array.length;
  const arg = [...arguments];

  for (let i = 0; i < arg.length; i += 1) {
    array[arrLength] = arg[i];
    arrLength += 1;
  }

  return arrLength;
};

// Further Exploration  - buggy Course Solution
// doesn't move the length of the array to account for new values added

// function push(array) {
//   var length = arguments.length;
//   var i;
//
//   for (i = 1; i < length; i += 1) {
//     array[i] = arguments[i];
//   }
//
//   return array.length;
// }

// corrected
// function push(array) {
//   var length = arguments.length;
//   var lengthArr = arguments[0].length;
//   var i;
//
//   for (i = 1; i < length; i += 1) {
//     array[lengthArr] = arguments[i];
//   }
//
//   return array.length;
// }

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
