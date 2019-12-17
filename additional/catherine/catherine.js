// Problem
// In: list (array) integers
// Out: new array with each element representing the sum of all of the values of the corresponding sub arrays of our argument array

// input is [1, 2, 3]
// subarrays:
// [1,2,3]
// [1,2]
// [1]
// []
// sums of each
// new array contains sums of each

// Rules: do not mutate the input array
// Notes: increment down from the full list to an empty array
// Edge Case: account for an empty array, providing a sum of 0 in the new array

// Approach Brainstorming:

// approach 2
//  - iterate over the array
//   using the length of the array as our upper boundary
//  - make a copy off the array
//  - reduce
//  - each pass subtract one from the variable corresponding to the length


// approach 1
//  - create a copy of the array and mutate that on each iteration
//  - reduce the number of elements in the array each time
//     until there are no more elements

//  - on each pass, reduce the contents of the array and pass that sum    into our new array

// Example / Tests


// Data Structure
// array

// Algorithm
// BEGIN
//   creating a copy of the array using slice()
//   create a new array, results, that will hold the sums of each subarray

//   while loop run until the copied is empty
//   on each pass, we reduce the array elements into a single value
//   pass the value into our results array

//   return results
// END


const sums = function sumsOfEachSubArray(array) {
  const results = [];
  const copyArray = array.slice();
  const reducer = (sum, currentValue) => sum + currentValue;

  // reduce doesn't work on empty arrays
  // guard clause for empty array push 0 into the results array

  while (copyArray.length >= 0) {
    if (copyArray.length === 0) {
      results.push(0);
      break;
    }
    let sumOfCurrentArray = copyArray.reduce(reducer);
    results.push(sumOfCurrentArray);
    copyArray.shift();
  }
  // if (copyArray.length === 0)
  return results;
};
