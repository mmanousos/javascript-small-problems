// How Old is Teddy
// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 200 (inclusive).

// Example Output:
//
// Teddy is 69 years old!

let age = 20 + Math.floor(Math.random() * 180);
console.log(`Teddy is ${age} years old!`);

// Course Solution
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var age = randomBetween(20, 200);
console.log('Teddy is ' + age + ' years old!');

// Further Exploration
// The randomBetween function used the Math.floor() method. Would it make a
// difference if the Math.round() method was used instead?

Math.round() instead of Math.floor() might push the value above our stated
threshold.

// Also, how can we make the function more robust? What if the user
// inadvertently gave the inputs in reverse order (i.e., the value passed to min
// was greater than max)?

function randomBetween(min, max) {
  if (max > min) {
    [max, min] = [min, max];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
