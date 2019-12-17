// Equal
// Read through the following code. Currently, it does not log the expected
// result. Explain why this happens, then refactor the code so that it works as
// expected.

var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// two objects will always evaluate as not equal when evaluated with the strict
// equality operator because they do not occupy the same place in memory
// instead we need to evaluate their properties for equality

console.log(person.name === otherPerson.name);

// Or we need to set the `otherPerson` variable to reference the same object
// as the object referenced by the `person` variable.
// Then we can use the strict equality operator to compare.

var person = { name: 'Victor' };
var otherPerson = person;
