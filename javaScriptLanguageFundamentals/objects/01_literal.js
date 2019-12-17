// Literal
// Identify the bug in the following code.
// Don't run the code until after you've tried to answer.

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; // 'd'
myObject[a]; // will warn that this is an unexpected identifier
             // this looks for a variable called `a` instead of the string `a` key present in the object
myObject.a;  // 'name'
