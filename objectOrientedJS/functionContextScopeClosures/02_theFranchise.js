// The Franchise
// The method `franchise.allMovies` is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object? Try fixing this 
// problem by taking advantage of JavaScript lexical scoping rules.

// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     });
//   },
// };

// As written, within `Array.map`, `this` is reassigned to the global object so 
// this function will return an array with three `NaN` values since `this.name`
// will evaluate to `undefined` and addition to `undefined` returns `NaN`.

// we can correct for it by setting a local variable within the method equal to 
// `this.name`
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let name = this.name;
    return [1, 2, 3].map(function (number) {
      return name + ' ' + number;
    });
  },
};

// // or a local variable equal to `this`
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function (number) {
      return this.name + ' ' + number;
    });
  },
};

// or explicitly set the execution context using the optional `thisArg`
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function (number) {
      return this.name + ' ' + number;
    }, this);
  },
};

// or bind `this`
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    return [1, 2, 3].map(function (number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

// unnecessary when using ES6 arrow function syntax
var franchise = {
  name: 'How to Train Your Draggon',
  allMovies: function() {
    return [1, 2, 3].map((number) => this.name + ' ' + number);
  },
};


console.log(franchise.allMovies());