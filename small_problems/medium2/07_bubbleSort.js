// Bubble Sort
// 'Bubble Sort' is one of the simplest sorting algorithms available. Although 
// it is not an efficient algorithm, it is an excellent exercise for student 
// developers. In this exercise, you will write a function that sorts an array 
// using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array. 
// On each pass, the two values of each pair of consecutive elements are 
// compared. If the first value is greater than the second, the two elements are 
// swapped. This process is repeated until a complete pass is made without 
// performing any swaps — at which point the array is completely sorted.

// 6	2	7	1	4	Start: compare 6 > 2? Yes
// 2	6	7	1	4	Swap
// 2	6	7	1	4	6 > 7? No (no swap)
// 2	6	7	1	4	7 > 1? Yes
// 2	6	1	7	4	Swap
// 2	6	1	7	4	7 > 4? Yes
// 2	6	1	4	7	Swap
// 2	6	1	4	7	2 > 6? No
// 2	6	1	4	7	6 > 1? Yes
// 2	1	6	4	7	Swap
// 2	1	6	4	7	6 > 4? Yes
// 2	1	4	6	7	Swap
// 2	1	4	6	7	6 > 7? No
// 2	1	4	6	7	2 > 1? Yes
// 1	2	4	6	7	Swap
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	1 > 2? No
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	No swaps; all done; sorted

// We can stop iterating the first time we make a pass through the array without 
// making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the 
// algorithm, as well as a minor optimization technique — see the Bubble Sort 
// Wikipedia page: https://en.wikipedia.org/wiki/Bubble_sort

// Write a function that takes an array as an argument and sorts that array 
// using the bubble sort algorithm described above. The sorting should be done 
// "in-place" — that is, the function should mutate the array. You may assume 
// that the array contains at least two elements.

// Problem
// In: array of values (can be numbers or strings)
// Out: array sorted in ascending order

// Rules: 
// - iterate through an array comparing each two consecutive pairs of values (a, b)
// - if a > b; swap them
// - if no swaps have happened on a pass of the array, then the array is sorted
// - sort should happen in place so the original array is mutated

// Assumptions: 
// - input is a valid array
// - array contains at least 2 elements

// Approach Brainstorming: 
// set swap indicator to true

// while true
// iterate through array
//   start at element 1
//   compare element i to element i - 1
//     if element i < element i - 1
//     swap
// if no swaps, set false 

// return sorted array

// Example / Tests 
// var array = [5, 3];
// bubbleSort(array);
// console.log(array);    // [3, 5]

// var array = [6, 2, 7, 1, 4];
// bubbleSort(array);
// console.log(array);    // [1, 2, 4, 6, 7]

// var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array);
// console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// Data Structure 
// Array

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < length; i += 1) {
      if (array[i] < array[i - 1]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return array;
}

// two optimized solutions per Wikipedia
function bubbleSort(array) {
  let len = array.length;
  while (true) {
    let swapped = false;
    for (let i = 1; i < len; i += 1) {
      if (array[i] < array[i - 1]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
    len = len - 1;
    if (!swapped) break;
  }

  return array;
}

function bubbleSort(array) {
  let len = array.length;
  while (len > 1) {
    newn = 0;
    for (let i = 1; i < len; i += 1) {
      if (array[i] < array[i - 1]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        newn = i;
      }
    }
    len = newn;
  }

  return array;
}


var array = [5, 3];
console.log(array);
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
console.log(array);
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(array);
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]