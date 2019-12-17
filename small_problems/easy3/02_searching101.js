// Searching 101
// Write a program that solicits six numbers from the user, then logs a message
// that describes whether or not the sixth number appears amongst the first five
// numbers.

const values = [];
let present;
values.push(parseInt(prompt('Enter the 1st number: '), 10));
values.push(parseInt(prompt('Enter the 2nd number: '), 10));
values.push(parseInt(prompt('Enter the 3rd number: '), 10));
values.push(parseInt(prompt('Enter the 4th number: '), 10));
values.push(parseInt(prompt('Enter the 5th number: '), 10));
const final = parseInt(prompt('Enter the last number: '), 10);

if (values.includes(final)) {
  present = 'appears';
} else {
  present = 'does not appear';
}

console.log(`The number ${final} ${present} in ${values}.`);


// Further Exploration
// What if the problem was looking for a number that satisfies some condition
// (e.g., a number greater than 25), instead of a specific number? Would the
// current solution still work? Why or why not? Think about this first before
// scrolling down.

function isIncluded(arr, val) {
  var i;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

// refactor using `some()`
function isIncluded(arr, val) {
  // const exists = function() {
  //   element === val;
  // };

  arr.some((element) => element === val);
}

// Examples:
//
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17
//
// The number 17 appears in [25, 15, 20, 17, 23].
//
// -----
//
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18
//
// The number 18 does not appear in [25, 15, 20, 17, 23].
