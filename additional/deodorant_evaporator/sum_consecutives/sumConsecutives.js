// https://www.codewars.com/kata/sum-consecutives/train/javascript

// You are given a list/array which contains only integers (positive and 
// negative). Your job is to sum only the numbers that are the same and 
// consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can asume there is never an 
// empty list/array and there will always be an integer.

// Same meaning: 1 == 1
// 1 != -1

// Examples:

// [1,4,4,4,0,4,3,3,1] // should return [1,12,0,4,6,1]

// So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 

// [1,1,7,7,3] // should return [2,14,3]
// [-5,-5,7,7,12,0] // should return [-10,14,12,0]

// Problem
// In: array of integers, positive and negative
// Out: new array with any consecutive integers reduced to a single value

// Rules: 1 =/= -1

// Approach Brainstorming:
// create new array to hold results 
// iterate through array
//   current value = value at current index
//   summed value = current value
//   if value at next index === current value
//     add next value to summed 
//   iterate current index and index + 1
//   until value at index != value at index +1
// push summed value to results 
// continue 

// return results array

// working solution
function sumConsecutives(s) {
  let results = [];
  let counter = 1;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === s[i + 1]) {
      counter += 1;
      continue;
    }
    if (counter === 1 && s[i] === s[i - 1]) {
      continue;
    }
    results.push(s[i] * counter);  
    counter = 1;
  }
  return results;
};

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])); // [1,12,0,4,6,1]
console.log(sumConsecutives([1, 1, 7, 7, 3])); // [2,14,3]
console.log(sumConsecutives([-5,-5,7,7,12,0])); // [-10,14,12,0]

// from CodeWars
const sumConsecutives = list => list.reduce((accumulator, curr, i, list) => {
  if (curr !== list[i - 1]) accumulator.push(curr);
  else accumulator[accumulator.length - 1] += curr;
  return accumulator;
}, []);

function sumConsecutives(s) {
  return s.reduce((r,v,k,a) => {r.push(a[k] == a[k-1] ? r.pop() + v : v); return r}, []);
}