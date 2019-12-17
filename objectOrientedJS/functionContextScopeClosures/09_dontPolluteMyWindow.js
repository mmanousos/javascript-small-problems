// Don't Pollute My Window
// Consider the following code:

var name = 'Naveed';
var greeting = 'Hello';

var greeter = {
  message: greeting + ' ' + name + '!',
  sayGreetings: function() {
    console.log(this.message);
  }
};

// Note that the `message` property uses the result of concatenation as its 
// value. As a result, we have two global variables: `name`, and `greeting` that 
// pollute the global scope. As we already know, we should limit the use of 
// global variables as much as we can. Here we can avoid using the global 
// variables by simply setting the `message` property to the value 
// "Hello Naveed!". But let's pretend that we must use variables and 
// concatenation to accomplish this. Can you think of a way to refactor this 
// code so we don't have any other variables in the global scope besides 
// `greeter`?

// we can define `name` and `greeting` as properties of the `greeter` object.
var greeter = {
  name: 'Naveed',
  greeting: 'Hello',
  message: greeting + ' ' + name + '!',
  sayGreetings: function () {
    console.log(this.message);
  }
};

greeter.sayGreetings();

// or we could define `name` and `greeting` as properties within another object, 
// then set an explicit context for them.

// here with `details` referenced directly
var details = {
  name: 'Naveed',
  greeting: 'Hello',
};

var greeter = {
  message: details.greeting + ' ' + details.name + '!',
  sayGreetings: function() {
    console.log(this.message);
  },
};

greeter.sayGreetings();

// Course Solution
// or we can use an IIFE to create the string `message` that is then referenced
// in the method `sayGreetings` 
var greeter = {
  message: (function() {
    let name = 'Naveed';
    let greeting = 'Hello';

    return greeting + ' ' + name + '!';
  })(),

  sayGreeetings: function() {
    console.log(this.message);
  }
}