// Array Object Part 1
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var myArray = ['a', 'b', 'c'];

console.log(myArray[0]);  // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';        // assigns a new property to the array
myArray['e'] = 5;         // assigns a new property to the array
myArray[3] = 'f';         // inserts a new value into the arrray at index 3

console.log(myArray[-1]);  // 'd'
console.log(myArray['e']); // 5
console.log(myArray);      // ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5] 
