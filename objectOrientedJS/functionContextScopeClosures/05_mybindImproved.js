// myBind() Improved
// Our earlier implementation of the Function.prototype.bind was simplistic. 
// Function.prototype.bind has another trick up its sleeve besides hard-binding 
// functions to context objects. It's called partial function application. Read 
// this assignment and the MDN documentation to learn more about partial 
// function application.

// Alter the myBind function written in the previous exercise to support partial
//  function application.

// requirements from problem 4
// Create a function myBind, that accepts two arguments: 1) The function to 
// bind, 2) The context object, and returns a new function that's hard-bound to 
// the passed in context object.

// solution from problem 4
// function myBind(func, obj) {
//   return function() {
//     return func.apply(obj, arguments);
//   };
// }

// my attempt at this solution - not correct
// function myBind(obj) {
//   return function(func) {
//     return func.apply(obj, arguments);
//   };
// }

// Course Solution
function myBind(func, ctx) {
  let partialArgs = [].slice.apply(arguments, [2]);

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}

function addNumbers(a, b) {
  return a + b;
}

var addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));