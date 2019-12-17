// What's my Bonus
// The calculateBonus function calculates the bonus for a given salary.
// It makes use of two arguments for determining the bonus: a salary amount and
// a boolean switch. If the boolean is true, the bonus should be half of the
// salary; otherwise the bonus should be 0. Fill in the blanks in the function
// so that it will work, then explain why it works.

// Examples:
//
// function calculateBonus() {
//   return _________[1] ? _________[0] / 2 : 0;
// }

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

// The `arguments` object is passed to the function.
// It is an array-like object containing all of the arguments passed in when the
// function is called. Since `arguments` is an array-like object, the argument
// values can be called using bracket notation.
