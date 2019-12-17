// Variable Scope
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// since there is no definition of `myVar` outside of the function, when the
// function runs, `myVar` is set at the global level. This allows access to it
// on line 10 which logs 'This is global'
