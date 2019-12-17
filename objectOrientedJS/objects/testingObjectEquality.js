// Testing Object Equality
// In JavaScript, comparing two objects either with == or === checks for object 
// identity. In other words, the comparison evaluates to true if it's the same 
// object on either side of == or ===. This is a limitation, in a sense, because 
//  sometimes we need to check if two objects have the same key/value pairs. 
// JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns 
// true or false depending on whether the objects have the same key/value pairs.

// Problem
// In: two objects
// Out: boolean representing whether they each have the same key/value pairs

// Assumptions: 
// - both arguments will be valid objects

// Approach Brainstorming: 
// - Create key arrays from each object
// - iterate over the first array of keys, comparing the corresponding value at 
// that index in the second key array and each value at each index
// - return false if at any point they do not match
// - return true after loop completes

// Data Structure 
// Array of object keys

function objectsEqual(objA, objB) {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i += 1) {
    if (keysA[i] !== keysB[i] || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    };
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// Course Solution
// They used the same logic I did but their way seems overly complicated. 
// I  do like that they immediately return true if the two objects reference the 
//  same point in memory using objA === objB;

function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();
  var bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(function (key, index) {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();
  var key;

  return aKeys.every(function (key) {
    return a[key] === b[key];
  });
}

// Further Exploration
// A limitation of this function is that it doesn't look for deep equality. In 
// other words, if one of the values is an object in both objects, this will 
// return false unless that object is identical on both objects.