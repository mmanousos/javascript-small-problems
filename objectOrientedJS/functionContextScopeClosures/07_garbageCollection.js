// Garbage Collection
// Read the following code carefully. Will the JavaScript garbage collection 
// mechanism garbage collect the variable `count` after the function `counter` 
// is run on line 15?

function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

var counter = makeCounter();
counter();

// No, the function `counter` creates a function scoped closure that contains a 
// refernce to  the variable `count` so it will not be garbage collected after 
// counter runs on line 15