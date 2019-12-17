// Delegate
// Write a `delegate` function that can be used to delegate the behavior of a 
// method or function to another object's method. `delegate` takes a minimum of 
// two arguments: (1) the object and (2) name of the method on the object. The 
// remaining arguments, if any, are passed — as arguments — to the objects' 
// method that it delegates to.

// Note that this is not the same as using `bind`. `bind` returns a new 
// function, whereas delegate maintains the reference.

// Problem
// In: object to delegate to, name of the method on that object, 
// optionally: additional arguments which will be passed up to the delegated method
// Out: return value of the delegated method using the provided arguments, if any.

// Rules: does not create a new function using `bind`
// Notes: use `call` or `apply` to execute the appropriate method with the arguments


// Here's a sample run;

function delegate(obj, methodName) {
  let args = Array.from(arguments).slice(2);
  return function() {
    return obj[methodName].apply(obj, args);
  };  
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

// delegate(foo, 'bar', 'hello');

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'