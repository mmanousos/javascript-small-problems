var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // Hello
}

if (!myString) {
  console.log('World'); // does not log - myString evaluates true, but the ! renders it false
}

if (!!myArray) {
  console.log('World'); // World - empty array object is truthy, converts to false and back to true so the string is logged
}

if (myOtherString || myArray) {
  console.log('!'); // ! - myOtherString is falsy but myArray is truthy so the string '!' is logged
}

// Conditionals Part 1
// Go over the above program. What does it log to the console at lines 7, 11,
// 15, and 19? Is it what you expected? Why or why not?
