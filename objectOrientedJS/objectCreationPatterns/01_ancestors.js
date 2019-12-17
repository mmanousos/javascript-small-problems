// Ancestors
// Implement an ancestors method that returns the prototype chain (ancestors) of
//  a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
// var foo = {name: 'foo'};
// var bar = Object.create(foo);
// bar.name = 'bar';
// var baz = Object.create(bar);
// baz.name = 'baz';
// var qux = Object.create(baz);
// qux.name = 'qux';

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

 
// Problem
// In: object
// Out: array of prototype object names that comprise the object's prototype chain

// Notes: Use recursion to get all the way to `Object.prototype` (=== null)

// Approach Brainstorming: 
// create an empty results array to hold the names of the prototype objects
// use Object.getPrototypeOf(obj) 
// add it to the results array
// set obj = that return value
// once the return value is `null`,
// return results array

// Example / Tests 
// var foo = { name: 'foo' };
// var bar = Object.create(foo);
// bar.name = 'bar';
// var baz = Object.create(bar);
// baz.name = 'baz';
// var qux = Object.create(baz);
// qux.name = 'qux';

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

// Data Structure 
// array

// Algorithm
// BEGIN
//   SET results = []
//   SET proto = Object.getPrototypeOf(obj)
//     IF proto === null 
//       break
//     ELSE 
//       IF (proto.name) 
//         push proto.name to results
//       ELSE
//         push proto to results
//       set this = proto 
//       and repeat until proto === null  
//   RETURN results
// END
// => check against test cases
// Does algorithm cover all test cases? 

// function ancestors(obj) {
//   let results = [];
//   let proto = Object.getPrototypeOf(obj);
//   console.log(proto);
//   // if (proto !== null) {

//   // }
// }

var foo = { name: 'foo' };
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

// My original solution 
foo.ancestors = function() {
  let results = [];
  function findAncestor(obj) {
    if (obj.name === undefined) {
      results.push('Object.prototype');
    } else {
      results.push(obj.name);
      obj = Object.getPrototypeOf(obj);
      findAncestor(obj);
    }
  }
  findAncestor(Object.getPrototypeOf(this));
  return results;
}

// My solution on the Object.prototype after reviewing the course solution
// adding to Object.prototype was my first instinct, but it wasn't working
// probably because I was misunderstanding what the return value would be when 
// trying to get the prototype of Object (I was expecting `null`)
Object.prototype.ancestors = function() {
  let results = [];

  function findAncestor(obj) {
    if (obj.name === undefined) {
      results.push('Object.prototype');
    } else {
      results.push(obj.name);
      obj = Object.getPrototypeOf(obj);
      findAncestor(obj);
    }
  }

  findAncestor(Object.getPrototypeOf(this));
  return results;
}

// Course Solution - much more refined than mine but I find mine easier to 
// follow because it specifies explicitly what the break condition is for the 
// recursion but this version doesn't even go into the recursion unless that 
// property exists on the object which also makes sense.
Object.prototype.ancestors = function ancestors() {
  var ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
