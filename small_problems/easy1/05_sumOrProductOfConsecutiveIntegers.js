// Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0, then
// asks if the user wants to determine the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

// Examples:
//
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
//
// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
//
// The product of the integers between 1 and 6 is 720.

const reducerSum = (accumulator, currentValue) => accumulator + currentValue;
const reducerProduct = (accumulator, currentValue) => accumulator * currentValue;

let number = parseInt(prompt('Please enter an integer greater than 0: '), 10);
let command;
let values;
let result;
let operation;

do {
  command = (prompt('Enter "s" to compute the sum, or "p" to compute the product.')).toLowerCase();
} while (/[^ps]/.test(command));

values = Array.from(Array(number).keys());
values = values.map((number) => number += 1);

if (command === 's') {
  result = values.reduce(reducerSum);
  operation = 'sum';
} else {
  result = values.reduce(reducerProduct);
  operation = 'product';
}

alert(`The ${operation} of the integers between 1 and ${number} is ${result}.`);

// Further Exploration
// What if the input was an array of integers instead of just a single integer?
// How would your computeSum and computeProduct functions change? Given that the
// input is an array, how might you make use of the Array.prototype.reduce()
// method?

// my implementation already uses `reduce` so I would simply skip the step of
// building an array from the integer. And of course, we can't use `parseInt` if
// the input is multiple numbers in a string.

const reducerSum = (accumulator, currentValue) => accumulator + currentValue;
const reducerProduct = (accumulator, currentValue) => accumulator * currentValue;

let input = prompt('Please enter comma separated integers greater than 0: ');
let command;
let values;
let result;
let operation;

values = input.split(',').map((string) => Number(string));

do {
  command = (prompt('Enter "s" to compute the sum, or "p" to compute the product.')).toLowerCase();
} while (/[^ps]/.test(command));

if (command === 's') {
  result = values.reduce(reducerSum);
  operation = 'sum';
} else {
  result = values.reduce(reducerProduct);
  operation = 'product';
}

alert(`The ${operation} of the integers ${values} is ${result}.`);
