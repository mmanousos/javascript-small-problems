// Array Concat Part 2
// The `concat` function from the previous exercise could only concatenate a
// maximum of two arrays. For this exercise, you are going to extend that
// functionality. Refactor the concat function to allow for the concatenation of
// two or more arrays or values.

// previous solution
// function concat(array1, secondArgument) {
//   const merged = [...array1];
//   if (Array.isArray(secondArgument)) {
//     for (let i = 0; i < secondArgument.length; i += 1) {
//       merged.push(secondArgument[i]);
//     }
//   } else {
//     merged.push(secondArgument);
//   }
//
//   return merged;
// }

function concat(...arguments) {
  return [...arguments].flat();
}

const arr = [1, 2, 3];
const strings = ['one', 'twelve']
const numbers = concat(arr, [4, 5, 6], [7, 8, 9]);
const mixed = concat(arr, 'a', strings);
const oneString = concat(arr, ['three'], 4);
console.log(numbers);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mixed);        // [1, 2, 3, "a", "one", "two"]
console.log(oneString);               // [1, 2, 3, "three", 4]
strings[1] = 15;
console.log(strings);
console.log(mixed);
