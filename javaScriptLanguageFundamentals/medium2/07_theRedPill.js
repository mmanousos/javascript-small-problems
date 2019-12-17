// The Red Pill
// Read through the code below and determine what will be logged. You may refer
// to the ASCII Table to look up character code values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result); // 'to'
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // 'Welcome'
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // 'the'
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);
// 'Matrix!'


// line 25 calls `anotherAnotherOne`
// this logs 'Welcome'
// then calls `anotherOne` which logs `to`
// line 26 calls `anotherOne` again logging `the`
// finally the `anotherOne` function is returned
// since a second set of values was passed in the inital method call, the
// returned `anotherOne` method logs `Matrix!`
