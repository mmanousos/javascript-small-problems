function uniqueInOrder(iterable) {
  const unique = [];
  for (let i = 0; i < iterable.length; i += 1) {
    if (unique[unique.length - 1] !== iterable[i]) {
      unique.push(iterable[i]);
    }
  }

  return unique;
}

function uniqueInOrder(iterable) {
  if (Array.isArray(iterable)) {
    iterable = iterable.join('');
  }

  let matches = iterable.match(/(.)\1{1,}/g);
  matches.forEach((match) => {
    iterable = iterable.replace(match, match[0]);
  });


  iterable = iterable.split('');
  if (iterable[0].match(/\d/)) {
    iterable = iterable.map(Number);
  }

  return iterable;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); // == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // == [1, 2, 3]
console.log(uniqueInOrder([3, 1, 2, 2, 3, 4])); // == [3, 1, 2, 3, 4]



Problem
In: sequence - either string of letters or array of numbers
Out: new array that removes repeated duplicates but preserves order of original order of elements

Rules: 
- elements with the same value can not be next to each other
- original order is preserved

Notes: 
- if the input is a string, return an array of strings string
- if the input is an array of numbers, return an array of numbers

Assumptions: 
- input will be a valid string or array

Approach Brainstorming: 
if string of letters, use regex to replace consecutive letters and split them into an array
if array of numbers, build new array

for string or array of numbers 
  iterate over for length of input
  build new array that removes duplicates

  new array: 
    iterate over input array / split string array from input 
    if character doesn't exist in new array, add it to the array
    if it already exists as the last character in the array, continue


Example / Tests 
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Data Structure 
string/array to array


Algorithm
BEGIN
  SET unique = []
  loop over input value 
    if current input element === last element of unique
      continue
    else 
      add current input element to unique
  return unique  
END
=> check against test cases
Does algorithm cover all test cases? 

with RegExp
convert array to string
look for groups of 2+ repeated characters
map over matches, replacing them with a single version of that character
return 