// Local vs Global Part 1
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// the function `someFunction` is hoisted above the `myVar` declaration on line 5
// line 12 logs 'This is global because the `myVar` variable within the function is local and thus destroyed after the function executes.
