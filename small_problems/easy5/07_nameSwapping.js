// Name Swapping
// Write a function that takes a string argument consisting of a first name, a
// space, and a last name, and returns a new string consisting of the last name,
// a comma, a space, and the first name.

// Examples:
//
// swapName('Joe Roberts');    // "Roberts, Joe"

// Problem
// In: string of first name, space, last name
// Out: new string of last name, comma, space, first name
//
// Approach Brainstorming:
// split string at space
// swap values and rejoin using comma as separator

// explict variable declaration + destructed assignment
const swapName = function lastNameFirst(name) {
  let first;
  let last;
  [first, last] = name.split(' ');
  return `${last}, ${first}`;
};

// destructred assignment as part of variable declaration
const swapName = function lastNameFirst(name) {
  let [first, last] = name.split(' ');
  return `${last}, ${first}`;
};

// spliting using RegEx
const swapName = function lastNameFirst(name) {
  let [first, last] = name.match(/(\S+)/g);
  return `${last}, ${first}`;
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


// Further Exploration
// What if the person had more than one first name? Refactor the current
// solution so that it can accommodate this.

// split string on spaces
// move last element to the front
// rejoin & return

const swapAllNames = function preserveOrderOfFirstNames(name) {
  let namesArray = name.split(' ');
  let last = namesArray[namesArray.length -1];
  let rest = (namesArray.slice(0, namesArray.length - 1)).join(' ');

  return [last, rest].join(', ');
};

console.log(swapAllNames('Melissa Nicole Manousos')); // "Manousos, Melissa Nicole"
