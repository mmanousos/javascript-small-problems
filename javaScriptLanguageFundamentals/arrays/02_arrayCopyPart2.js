// Array Copy Part 2
// In the previous exercise, the value of the reference gets copied. For this
// exercise, only the values of the array should be copied, but not the
// reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray;
//
// myArray.pop();
// console.log(myOtherArray);
//
// myArray = [1, 2];
// console.log(myOtherArray);

// solution 1 - use `slice()` to make a shallow copy of the array.
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// solution 2 - make a shallow copy using `Array.from()`
var myArray = [1, 2, 3, 4];
var myOtherArray = Array.from(myArray);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// Course prefers to iterate over the array and build a new array
// other options:

const myArray = [1, 2, 3, 4];

// spread operator
const myOtherArray = [...myArray];

// `slice()` returns a new array
const myOtherArray = myArray.slice();

// `concat()` array to an empty array
const myOtherArray =  [].concat(myArray);

// `map()`` original array to a new array
const myOtherArray = myArray.map((value) => value);

// create a new array literal using `Array.from()`
const myOtherArray = Array.from(myArray);

// iterate over the array
const myOtherArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}
return myOtherArray;
