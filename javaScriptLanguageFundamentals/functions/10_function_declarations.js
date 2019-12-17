// Function Declarations
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

logValue();

function logValue() {
  console.log('Hello, world!');
}

// logs 'Hello, world!'
// the entire function declaration is hoisted so it can be called before it is declared.

// Further Exploration
// Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // logs String

// hoisted equivalent
function logValue() {
  console.log('Hello, world!');
} // also declares a variable `logValue`

var logValue = 'foo'; // reassigns that variable making the function inaccessible

console.log(typeof logValue);
