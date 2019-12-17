// Literal Method
// In the following code, a user creates a person object literal and defines two
// methods for returning the person's first and last names. What is the result
// when the user tries out the code on the last line?

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);

// my guess
// 'Victor Reyes'

// actually
// returns the full function contained within each value
// the function declarations are unnecessary here and the return values should simply be stored as the values of the keys in the object properties

var person = {
  firstName: 'Victor',
  lastName: 'Reyes',
};

console.log(person.firstName + ' ' + person.lastName);

// if instead we wanted to call the functions, we need to append the key names with parentheses

console.log(person.firstName() + ' ' + person.lastName());
