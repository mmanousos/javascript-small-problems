// Array Slice and Splice
// In this exercise, you will implement your own versions of the
// Array.prototype.slice and Array.prototype.splice methods according to the
// following specifications.

// The slice function takes three arguments: an array, and two integers
// representing a begin and an end index. The function returns a new array
// containing the extracted elements starting from begin up to but not including
// end. slice does not mutate the original array.

// The splice function changes the contents of an array by deleting existing
// elements and/or adding new elements. The function takes the following
// arguments: an array, a start index, a deleteCount, and zero or more elements
// to be added. The function removes deleteCount number of elements from the
// array, beginning at the start index. If any optional element arguments are
// provided, splice inserts them into the array beginning at the start index.
// The function returns a new array containing the deleted elements, or an empty
// array ([]) if no elements are deleted. splice mutates the original array.

// Additional specifications:

// slice:
// The values of begin and end will always be integers greater than or equal to 0.
// If the value of begin or end is greater than the length of the array, set it
// to equal the length.

// splice:
// The values of start and deleteCount will always be integers greater than or
// equal to 0.
// If the value of start is greater than the length of the array, set it to
// equal the length.
// If the value of deleteCount is greater than the number of elements from start
// up to the end of the array, set deleteCount to the difference between the
// array's length and start.
// Takes optional arguments for elements to add to the array; denoted by the
// parameters element1 up to elementN. If no elements to add are provided,
// splice only removes elements from the array.

// slice:
// in: an array, integers representing begin and end index
// out: copy of array starting at begin index and ending before end index
//
// if begin or end are > array.length reset to length

function slice(array, begin, end) {
  const slicedArray = [];
  const length = array.length;

  if (begin > length) begin = length;  // could also use: begin = Math.min(begin, length);
  if (end > length) end = length;      //                 end   = Math.min(end, length);

  for (let i = begin; i < end; i += 1) {
    slicedArray.push(array[i]);
  }

  return slicedArray;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]

// splice:
// in: array, start index, deleteCount, zero or more elements to add
// out: array of deleted elements or empty array if no elements are deleted
//
// if start > array.length set = length
// if deleteCount > array.length - start set = array.length - start
//
//
// new array to hold deleted elements
//
// add delete count to start index for end index value
// iterate over array starting at start index
//   if there are more than 3 arguments // add elements to array
//     if deleteCount === 0
//       iterate over those and add them at start
//     else
//       push element to deleted elements array
//       sub in element from arguments
// (what if arguments provided != deleteCount?)
//   else // delete elements from array
//     push element to deleted elements array
//     shift elements from end index to current index
//
// return deleted elements array

function splice(array, start, deleteCount, element1, elementN) {
  const input           = arguments;
  const lengthArray     = array.length;
  const lengthArguments = input.length
  const deleted         = [];
  let finish;

  if (start > lengthArray) start = lengthArray;
  if (deleteCount > lengthArray - start) deleteCount = lengthArray - start;
  finish = start + deleteCount;

  function insertElements(args) {
    let preserved = array.slice(start, lengthArray);  // copy all the elements that need to be preserved
    let j = start;
    for (let i = 3; i < lengthArguments; i += 1) { // iterate over remaining arguments and add them to the array, overwriting previous values
      array[j] = args[i];
      j += 1;
    }

    for (let k = 0; k < preserved.length; k += 1) { // iterate over preserved elements and add them at higher index
      let offset = 3 - start;
      array[lengthArguments - offset + k] = preserved[k];
    }
  }

  function replaceElements() {
    let j = 3;
    for (let i = start; i < finish; i += 1) {
      deleted.push(array[i]);
      array[i] = input[j];
      j += 1;
    }
  }

  function deleteElements() {
    if (deleteCount === 0) return;
    for (let i = start; i < finish; i += 1) {
      deleted.push(array[i]);
      array[i] = array[finish + 1];
    }
    array.length = finish;
    return array;
  }

  if (lengthArguments > 3) {
    if (deleteCount === 0) {
      insertElements(input);
      } else {
        replaceElements();
      }
    } else {
      deleteElements();
    }
  return deleted;
}

// Christina Unger's solution - uses custom `slice()` method
function splice(array, start, deleteCount, ...values) {
  start       = Math.min(start, array.length);
  deleteCount = Math.min(deleteCount, array.length - start);

  var deleted = slice(array, start, start + deleteCount);
  var rest    = slice(array, start + deleteCount, array.length);

  array.length = start;
  array.push(...values);
  array.push(...rest);

  return deleted;
}

// refactored to use built-in `slice()`
function splice(array, start, deleteCount, ...values) {
  start       = Math.min(start, array.length);                // Math.min() returns the smallest of the provided arguments
  deleteCount = Math.min(deleteCount, array.length - start);

  let deleted = array.slice(start, start + deleteCount);
  let rest    = array.slice(start + deleteCount, array.length);

  array.length = start;
  array.push(...values);
  array.push(...rest);

  return deleted;
}

// *** delete elements ***
console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// *** replace elements ***
var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

// *** insert elements ***
var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 2, 0, 'a'));               // []
console.log(arr);                                  // [1, 2, "a", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 3, 0, 'a'));               // []
console.log(arr);                                  // [1, 2, 3, "a"]

var arr = [1, 2, 3, 4, 5];
console.log(splice(arr, 4, 0, 'a'));               // []
console.log(arr);                                  // [1, 2, 3, 4, "a", 5]


// Course Solution - relies on `0` values to essentially short circuit the loops
// rather than my logic that uses if/else statements.
// function splice(array, start, deleteCount) {
//   start = start > array.length ? array.length : start;
//   deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;
//
//   var arrayCopy = slice(array, 0, array.length);              // use custom `slice` to preserve end of array
//   var elementCount = arguments.length - 3;                    // figure out number of elements to add / replace
//   var newLength = array.length + elementCount - deleteCount;  // determine what new length of final array should be
//   array.length = newLength;                                   // set new length
//   var copyBackCount;
//   var i;
//
//   for (i = 0; i < elementCount; i += 1) {                     // add new elements
//     array[start + i] = arguments[3 + i];
//   }
//
//   copyBackCount = arrayCopy.length - (start + deleteCount);   // determine how many elements to add back to the array from the preserved array elements
//   for (i = 0; i < copyBackCount; i += 1) {                    // add elements back
//     array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
//   }
//
//   return slice(arrayCopy, start, start + deleteCount);        // use custom `slice` to only return the required elements
// }
