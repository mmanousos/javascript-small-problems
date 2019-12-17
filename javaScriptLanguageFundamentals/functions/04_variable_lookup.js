// Variable Lookup
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// logs 'This is global'
// we only have one value for `myVar` so the function looks for a value until one is found.
