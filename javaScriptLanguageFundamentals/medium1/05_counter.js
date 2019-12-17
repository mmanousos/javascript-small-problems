// Counter
// What will the following code snippets log?

// Code Snippet 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// the function declaration `counter` gets hoisted, then the variable `counter`
// is defined, reassigning its value.
// expected: `counter` is set to 5 and the string logs as expected.


// Code Snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// the variable declarations for counter and rate are hoisted but not their
// assignments. So the string does not log as expected.
// expected: Argument Error
// actual: 'The total value is NaN' because the two undefined variables are not
// numbers and therefore their product produces `NaN`


// Code Snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// the function declaration is hoisted, but then `counter` is defined and
// reassigns it.
// expected: the string logs as expected.
