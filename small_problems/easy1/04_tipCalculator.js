// Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will put in numbers.

// Example:
//
// What is the bill? 200
// What is the tip percentage? 15
//
// The tip is $30.00
// The total is $230.00

let bill = parseFloat(prompt('What is the bill?'), 10);
let tipPercentage = parseFloat(prompt('What is the tip percentage?'), 10);
let tip = bill * (tipPercentage / 100);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(bill + tip).toFixed(2)}`);
