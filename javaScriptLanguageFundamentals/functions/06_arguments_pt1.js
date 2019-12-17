// Arguments Part 1
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// logs 17 - incorrect

// since a is assigned to a primitive, passing in the variable and reassigning it within the function has no affect.
