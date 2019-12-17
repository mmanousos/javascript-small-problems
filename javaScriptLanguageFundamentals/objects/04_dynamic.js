// Dynamic
// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456'; // declares a variable and assigns it the value of '456'
myObject['prop2'] = '456'; // accesses the key `prop2` and reassigns it the value of '456'
myObject[prop2] = '678'; // adds a new property to the object using the variable `prop2`; key: '456'; value: '678'

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2);  // '456'


// Further Exploration
// Here is another example. What do you think will be logged to the console this
// time, and why?

var myObj = {};                 // new object
myObj[myFunc()] = 'hello, ';    // property (including return value of function call) is assigned to object

function myFunc() {             // function is declared - since it is a function declaration, it will be hoisted
  return 'funcProp';
}

console.log(myObj);             // {funcProp: 'hello, '}
myObj[myFunc()] = 'world!';     // value of the function key is reassigned
console.log(myObj);             // {funcProp: 'world!'}
