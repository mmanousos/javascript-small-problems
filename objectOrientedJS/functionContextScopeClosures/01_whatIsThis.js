// What is This
// Read the following code carefully. What do you think is logged on line 7. Try
//  to answer the question before you run the code.

var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// I believe it will log the name 'Rick Sanchez' since within an object, `this`
// references the object itself and here it's referring to properties of the
// `person` object 
// - INCORRECT

// logs `NaN` because here `this` refers to the global object (outside of a 
// function or method) and there are no `firstName` or `lastName` properties 
// defined on the global object. So `fullName` tries to do addition on two
// `undefined`s which returns `NaN`.
