// Grocery List
// Write a function that takes a grocery list (a two-dimensional array) with 
// each element containing a fruit and a quantity, and returns a 
// one-dimensional array of fruits, in which each fruit appears a number of 
// times equal to its quantity.
//   Example:

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Problem
// In: 2D array of fruit and a quantity in each subarray
// Out: 1D array with the name of the fruit appearing the appropriate number of times

// Assumptions: argument array will not be empty, only 2D arrays will be provided

// Approach Brainstorming:
// Approach 1
// - map over the argument array
//   - create new array 
//   - counter 
//   - while counter < quantity (element[1])
//     - push fruit name to new array
//     - counter += 1
//   - return new array
// - flatten the resulting nested arrays

// Approach 2
// - create a new array
// - iterate over the argument array (forEach)
//   - counter
//   - while counter < quantity (element[1])
//     - push fruit name to new array
//     - increment counter += 1

// Approach 3
// - map over argument array
//   - `${element[0]}, `.repeat(element[1])
// - flatten the resulting nested arrays
// - remove any trailing `','`  

// Data Structure
// array

// not quite right - creates separate strings for each element 
// [ 'apple, apple, apple', 'orange', 'banana, banana' ]
// instead of ["apple", "apple", "apple", "orange", "banana", "banana"]

// const listFruit = function repeatFruit(fruitCount) {
//   let counter = 0;
//   let fruits = [];
//   while (counter < fruitCount[1]) {
//     fruits.push(fruitCount[0]);
//     counter += 1
//   };
//   return fruits.join(', ');
// };

// const buyFruit = function convertNestedArrayToFlatWithRepetition(fruits) {
//   return fruits.map(listFruit).flat();
// };

const listFruit = function repeatFruit(fruitCount) {
  let counter = 0;
  let fruits = [];
  while (counter < fruitCount[1]) {
    fruits.push(fruitCount[0]);
    counter += 1
  };
  return fruits;
};

const buyFruit = function convertNestedArrayToFlatWithRepetition(fruits) {
  return fruits.map(listFruit).flat();
};

// const buyFruit = function convertNestedArrayToFlatWithRepetition(fruits) {
//   let oneD = fruits.map((fruit) => `${fruit[0]} `.repeat(fruit[1])).flat();
//   console.log(oneD);
// };

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]