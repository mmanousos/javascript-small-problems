// Range
// We are assigned the task to implement a range function that returns an array 
// of integers beginning and ending with specified start and end numbers. When 
// only a single argument is provided, that argument should be used as the 
// ending number and the starting number should be 0.

// Check our code below. Why do the the example invocations fail with an error 
// saying `Maximum call stack size exceeded`? Can you fix the code, so it runs 
// without error and satisfies the requirements?

// function range(start, end) {
//   var range = [];
//   var element;
//   for (element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// function range(end) {
//   return range(0, end);
// }

// Examples
// console.log(range(10, 20));
// console.log(range(5));

// only the second function (defined on lines 21-23) is being used here and is 
// calling itself recursively. if we want to use the logic of the first `range` 
// function (defined on lines 11-19), we need to give the two functions 
// different names. or, even better, combine them into one function that has a 
// default value for `start`.


function range(start, end) {

  // console.log(!end);

  // if (arguments.length === 1) {
  if (!end) {
    end = start;
    start = 0;
  }
  var range = [];
  var element;

  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// console.log(range(10, 20));
console.log(range(5));

// Further exploration
// There are two reasons why the following is not a working solution. Can you 
// spot them?

function range(start, end) {
  if (!end) {
    start = 0;
    end = start;
  }

  // ...
}

// 1. on line 64, we assign `start` to `0` but then assign `end` to `start` so 
// the range will be `0`-`0`, which is not as intended. 
// 2. We should explicitly check that `end` is missing, either using 
// `arguments.length` or `end === undefined` because `0` is falsy so passing
// an argument of `0` as `end` would trigger this clause unintentionally.