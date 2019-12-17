// Amount Payable
// What does the following code log? Why is this so?

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// `startingBalance` is reassigned on `line 12` before totalPayable is called.
// because of JavaScript's scoping rules this reassigned value is available to
// the function expression `totalPayable` when it is called on `line 13` because
// a closure was created when the function was declared. The value of
// `startingBalance` is looked up each time the function is called.

// totalPayable is not a pure function
