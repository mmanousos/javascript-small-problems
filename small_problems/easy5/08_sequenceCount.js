// Sequence Count
// Create a function that takes two integers as arguments. The first argument is
// a count, and the second is the starting number of a sequence that your
// function will create. The function should return an array containing the same
// number of elements as the count argument. The value of each element should be
// a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than
// or equal to 0. The starting number can be any integer. If the count is 0, the
// function should return an empty array.

// Examples:
//
// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []

// Problem
// In: two integers - count, base number
// Out: array of multiples of the base number containing count number of elements
//
// Assumptions:
// - count will always be an integer greater or equal to 0
// - starting number can be any integer
// - if count is 0, function should return an an empty array
//
// Approach Brainstorming:
// create new array to hold results
//
// approach 1
// - create counter = 1
// - use while loop
//   - while length of results array is < count integer
//   - multiply base number by counter and add to results array
//   - counter += 1
//
// approach 2
// - for loop until results.length === count integer
//
// return results array

const sequence = function seriesOfMultiples(count, base) {
  const series = [];

  for (let i = 1; series.length < count; i += 1) {
    series.push(base * i);
  }

  return series;
};


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
