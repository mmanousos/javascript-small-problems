// Array Concat Part 1
// In this exercise, you will learn more about Arrays by implementing your own
// version of the Array.prototype.concat method. Write a function that returns a
// new array composed of all values from the first array argument and the second
// array or value argument. Take note of the following specifications when
// writing your concat function.

// The first argument will always be an array.
// The second argument can be either an array or another value.
// The function should return a new array.
// The elements in the new array should be in the same order as they appear in the arguments.
// The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling concat, those changes should show up in the output array as well.
// The function should copy the values of primitives (e.g., strings, numbers, and booleans).
//
// Problem
// in: array, array or other value
// out: new array with those values merged in the same order as they are represented in arguments
// new array is copy of object references (can be altered and original will be altered) and primitive values (strings, numbers, booleans)
//
// Algorithm
// BEGIN
//   duplicate the first array into a new array
//   determine if the second argument is an array (Array.isArray())
//     if yes, iterate over adding elements to the new array
//     if no, add to new array
//   return new array
// END
//
// // Examples:

function concat(array1, secondArgument) {
  const merged = [...array1];
  if (Array.isArray(secondArgument)) {
    for (let i = 0; i < secondArgument.length; i += 1) {
      merged.push(secondArgument[i]);
    }
  } else {
    merged.push(secondArgument);
  }

  return merged;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                                      // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }
