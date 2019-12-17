// Local vs Global Part 2
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// logs 'This is local' because the logging takes place within the function.
// in that inner scope, `myVar` references the local variable.
