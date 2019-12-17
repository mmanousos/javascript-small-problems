// Arguments Part 3
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // logs [1, 2, 10]; objects are mutable so the value within the array can be reassigned.
