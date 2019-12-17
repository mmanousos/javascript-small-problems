// Given n, return an X pattern of numbers. For example:

// Problem
// In: positive integer representing the center number of the X
// Out: return strings that would print an X within a square that is n*2 - 1.

// Rules: 
// - square is n * 2 - 1 (width by height)
// - each row prints either incrementing or de-incrementing numbers up to or down from N
// - in order to create the X, as we approach N, the space between the numbers 
// decreases, and the space outside of the numbers increases

// Notes: 
// Assumptions: 
// - positive integer
// - only single digit values to represent each row
//    - so 10 = 0; 11 = 1, etc.

// Approach Brainstorming: 
// - two halves 
// - with the center row containing N - unique in that only has N as the center point
// - margin (outside of the x)
// - padding (inside of the x)
// - center (row containing N)
/* 
when building the top half, 
the margin increases 
the padding decreases

when building the bottom half, 
the margin decreases
the padding increases

' '.repeat(margin) + character + ' '.repeat(padding) + character + ' '.repeat(margin)
' '.repeat(margin) + character + ' '.repeat(margin)

/* Example / Tests 


Data Structure 
Array of rows

Algorithm
BEGIN
  center point = N
  margin = 0
  padding = N * 2 - 3

  for loop 
    starting value will be 1
    increment up to N
    build our top rows 

    ' '.repeat(margin) + character + ' '.repeat(padding) + character + ' '.repeat(margin)
    margin += 1
    padding -= 2

  center row
    ' '.repeat(margin) + character + ' '.repeat(margin)
  
  for loop
    starting value will be N - 1
    increment down to 1
    build our bottom rows

    ' '.repeat(margin) + character + ' '.repeat(padding) + character + ' '.repeat(margin)

    padding += 2
    margin -= 1
END

- verify that padding doesn't go below 0
- get the ones digit of an value before building the row
- convert the value to a string
    character = value[value.length - 1]

=> check against test cases
Does algorithm cover all test cases? 
*/

function onesPlace(number) {
  let num = String(number);
  return num[num.length - 1];
}

function pattern(N) {
  const centerPoint = N;
  let margin = 0;
  let padding = N * 2 - 3;
  const results = [];

  for (let i = 1; i < N; i += 1) {
    let row = ' '.repeat(margin) + onesPlace(i) + ' '.repeat(padding) + onesPlace(i) + ' '.repeat(margin)
    results.push(row);
    margin += 1;
    padding -= 2; 
    if (padding < 0) padding = 1;
  }

  results.push(' '.repeat(margin) + onesPlace(N) + ' '.repeat(margin))
  margin -= 1;

  for (let i = N - 1; i > 0; i -= 1) {
    let row = ' '.repeat(margin) + onesPlace(i) + ' '.repeat(padding) + onesPlace(i) + ' '.repeat(margin)
    results.push(row);
    margin -= 1;
    padding += 2;
  }

  results.forEach((row) => console.log(row));
}

pattern(5);
// 1       1
//  2     2 
//   3   3  
//    4 4   
//     5    
//    4 4   
//   3   3  
//  2     2 
// 1       1

pattern(10);
// 1                 1
//  2               2 
//   3             3  
//    4           4   
//     5         5    
//      6       6     
//       7     7      
//        8   8       
//         9 9        
//          0         
//         9 9        
//        8   8       
//       7     7      
//      6       6     
//     5         5    
//    4           4   
//   3             3  
//  2               2 
// 1                 1

pattern(25);
