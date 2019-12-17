// Array Object Part 2
// A user wrote a function that takes an array as an argument and returns its
// average. Given the code below, the user expects the average function to
// return 5. Is the user's expectation correct? Why or why not?

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
// array now looks like: [5, 5, '-1': 5, '-1': 5]

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));

// it does not return the expected value.
// since the user started the for loop iteration value at `-2`, the function
// accesses the property values (each `5`) as well as the indexed array values
// (also each `5`). Then, because only indexed elements are counted by the
// `length` property, `sum` is only divided by `2`, not 4.
// the return value is `10`.

// Further Exploration
// Refactor the average function so that it returns the result that the user
// expected, 5.

var myArray = [5, 5];

function average(array) {
  var sum = 0;
  var i;

  for (i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));
