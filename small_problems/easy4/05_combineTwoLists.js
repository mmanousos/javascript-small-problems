// Combine Two Lists
// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each
// element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the
// same number of elements.

// Example:

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// Problem
// In: two arrays of equal length
// Out: a single array with alternating elements from the original arrays
//
// Assumptions: not empty, same length
//
// Approach Brainstorming:
// get length of one array
// iterate through both arrays adding the elements to a new array

const interleave = function alternateElements(arr1, arr2) {
  const merged = [];
  for (let i = 0; i < arr1.length; i += 1) {
    merged.push(arr1[i], arr2[i]);
  }

  return merged;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
