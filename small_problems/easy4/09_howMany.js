// How Many
// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences.

// Example:
//
// var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];
//
// countOccurrences(vehicles);
//
// // console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// Problem
// In: array of values
// Out: logged count of each value
//
// Approach Brainstorming:
// - create a new object
// - iterate through the array
//   - each element will either create a new key or increment the existing count
// - iterate through the object logging each key-value property pair

// this should really be two separate functions:
  // one to count and create the object
  // one to display the counts

const countOccurrences = function logCountedElements(array) {
  const counts = {};
  let keys;
  array.forEach((value) => {
    if (counts[value]) counts[value] += 1;
    else counts[value] = 1;
  });

  for (keys in counts) {
    console.log(`${keys} => ${counts[keys]}`);
  }
};

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
