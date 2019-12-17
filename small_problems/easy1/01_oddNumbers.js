// Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers
// on separate lines.

// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
// }

// Further Exploration
// Repeat this exercise with a technique different from the one that you used,
// and different from the one provided. Also consider adding a way for the user
// to specify the limits of the odd numbers logged to the console.

// let i = 1;
//
// while (i < 100) {
//   console.log(i);
//   i += 2;
// }

let start = parseInt(prompt('Enter a starting odd number'));
let end = parseInt(prompt('Enter an ending odd number'));

if (start % 2 === 0) start += 1;
if (end % 2 === 0) end += 1;

while (start <= end) {
  console.log(start);
  start += 2;
}
