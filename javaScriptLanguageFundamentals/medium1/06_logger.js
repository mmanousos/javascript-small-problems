// Logger
// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The `debugIt` function is called on on line 13.
// This sets the variable `status` to the string `'debugging'`.
// Then calls the function `logger` on line 10 which in turn logs the value of
// the variable `status`.

// Course Solution
// On line 4, the status variable has a value of 'debugging' because of JavaScript's lexical scoping rules.

// The debugIt function defines a local variable named status and a function
// named logger. logger is an inner (nested) function, so it has access to any
// variables declared in the scope of its outer (parent) function, debugIt, due
// to lexical scoping rules.
