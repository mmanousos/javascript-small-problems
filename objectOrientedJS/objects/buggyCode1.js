// Buggy Code 1
// The code below is expected to output the following when run:

var helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// "Good Morning Victor"


function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      var msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += morning + ' ' + name;
          break;
        case 'afternoon':
          msg += afternoon + ' ' + name;
          break;
        case 'evening':
          msg += evening + ' ' + name;
          break;
      }
      
      console.log(msg);
    },
  };
}

// However, it instead results in an error. What is the problem with the code? 
// Why isn't it producing the expected results?

// The greet function doesn't know where to look for the variables for the 
// relative times of day 'morning', 'afternoon', and 'evening' because the 
// `this` keyword is not used to reference the object.
// if we used `this.` to prepend each property key, it should work as expected.

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function (timeOfDay) {
      var msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + name;
          break;
        case 'afternoon':
          msg += this.afternoon + ' ' + name;
          break;
        case 'evening':
          msg += this.evening + ' ' + name;
          break;
      }

      console.log(msg);
    },
  };
}

var helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// "Good Morning Victor"

// Course Solution
switch (timeOfDay) {
  case 'morning':
    msg += this.morning + ' ' + this.name;
    break;
  case 'afternoon':
    msg += this.afternoon + ' ' + this.name;
    break;
  case 'evening':
    msg += this.evening + ' ' + this.name;
    break;
}
// Further Exploration
// An alternative solution to this exercise is the following code:
switch (timeOfDay) {
  case 'morning':
    msg += this.morning + ' ' + name;
    break;
  case 'afternoon':
    msg += this.afternoon + ' ' + name;
    break;
  case 'evening':
    msg += this.evening + ' ' + name;
    break;
}

// Why does it work? What concept does this demonstrate?
// Demonstrates closures 
// since using `this` for the first part of the string creation references the 
// object, subsequent property keys referenced in the same function can access 
// that context.