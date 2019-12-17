// Hello Friends!
// You have written basic functions to display a random greeting to any number
// of friends upon each invocation of greet. Upon invoking the greet function,
// however, the output is not as expected. Figure out why not and fix the code.

function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  words[idx];
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var greeting = randomGreeting;

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// as written - code returns the entire function `randomGreeting` instead of
// the single greeting expected
// my first guess is that the return keyword is missing from the final line of
// the `randomGreeting` function (line 12)
// upon closer inspection, on line 21, the variable `greeting` is assigned to
// the function of `randomGreeeting` instead of the return value of
// `randomGreeting` which would be assigned if the function were called using
// parentheses
// both mistakes need to be corrected to get the program to work as expected.

function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  return words[idx]; // add `return` to explicitly return the greeting
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var greeting = randomGreeting(); // add parentheses after `randomGreeting` to call the function

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
