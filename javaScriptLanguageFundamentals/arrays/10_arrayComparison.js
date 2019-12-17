// Array Comparison
// The array comparison function that we implemented in the Arrays lesson
// implicitly assumed that when comparing two arrays, any matching values must
// also have matching index positions. The objective of this exercise is to
// reimplement the function so that two arrays containing the same values—but in
// a different order—are considered equal. For example, [1, 2, 3] === [3, 2, 1]
// should return true.
//
// Problem
// In: two arrays
// Out: boolean representing whether all the elements of both arrays match,
// regardless the order of each array
//
// Approach Brainstorming:
// 1. sort each array so they are both in the same order, then compare **
// 2. create an object to count the values of each element in each array - if both counts are the same, true
// 3. use built-in JavaScript method `includes()`
// 4. use built-in JavaScript method `every()` or `some()`?
//    - could use `some()` to verify that the same value from one array existed in the second array
//    - then would need to remove that element from the array to ensure subsequent elements did not match that same instance.
//
// Algorithm
// BEGIN
//   arr1.sort
//   arr2.sort
//   iterate over arr1
//     if arr1[i] !== arr2[i]
//       return false
//   return true
// END

// My solution - mutates both arrays
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  array1.sort();
  array2.sort();

  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// My implementation of the Course Solution
// iterate over one of the arrays, removing matches from a copy of the other array
// if all elements have been removed, return true.
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const copyArray2 = array2.slice();

  for (let i = 0; i < array1.length; i += 1) {
    let index = copyArray2.indexOf(array1[i]);
    if (index === -1) return false;
    copyArray2.splice(index, 1);
  }

  return (copyArray2.length === 0);
}

// Course Solution
function areArraysEqual(array1, array2) {
  var array2Copy;
  var index;
  var i;

  if (array1.length !== array2.length) {
    return false;
  }

  array2Copy = array2.slice();
  for (i = 0; i < array1.length; i += 1) {
    index = array2Copy.indexOf(array1[i]);
    if (index >= 0) {
      array2Copy.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}

// using `include()`
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const copyArray2 = array2.slice();

  for (let i = 0; i < array1.length; i += 1) {
    if (copyArray2.includes(array1[i])) {
      copyArray2.splice(copyArray2.indexOf(array1[i]), 1);
    } else {
      return false;
    }
  }

  return true;
}

// using `some()`
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const copyArray2 = array2.slice();

  const match = function(element, currentValue) {
    return element === currentValue;
  };

  for (let i = 0; i < array1.length; i += 1) {
    if (copyArray2.some((element) => match(element, array1[i]))) {
      copyArray2.splice(copyArray2.indexOf(array1[i]), 1);
    } else {
      return false;
    }
  }

  return true;
}


console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, 35, 23, 12, 2, 26], [1, 26, 12, 35, 23, 2])); // true
