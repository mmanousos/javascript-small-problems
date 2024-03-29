// myFilter()
// In this exercise we'll update the implementation of myFilter by adding the 
// functionality of accepting an optional thisArg just like the original 
// Array.prototype.filter.

// Here's our original implementation. We also show an example of how we want to
//  call our modified function: the 3rd argument, filter, supplies the desired 
// context (thisArg).

// function myFilter(array, func) {
//   var result = [];
  
//   array.forEach(function(value) {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// var filter = {
//   allowedValues: [5, 6, 9],
// }

// console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter)); // returns [5, 6, 9]

// Modify the original implementation such that the expected result is returned.
//  Don't use the thisArg argument of Array.prototype.forEach.

// option 1 - replace `this` with `filter` - not what they're looking for, I'm sure
// function myFilter(array, func) {
//   var result = [];

//   array.forEach(function (value) {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// var filter = {
//   allowedValues: [5, 6, 9],
// }

// console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function (val) {
//   return filter.allowedValues.indexOf(val) >= 0;    // replace 'this' with 'filter' 
// }, filter)); // returns [5, 6, 9]

// Course Solution - use `call` and pass in `thisArg` as well as `value` to create explicit function context
function myFilter(array, func, thisArg) {
  var result = [];

  array.forEach(function (value) {
    if (func.call(thisArg, value)) { // change happens here
      result.push(value);
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function (val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]