// Arithmetic Integer
// In this program we're going to explore the basic arithmetic operations in JavaScript. The program below prompts the user for two positive integers, then logs the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. For this exercise, assume positive integers as inputs.
//
// Here are our expected results after running the program:
//
// Enter the first number: 23
// Enter the second number: 17
//
// 23 + 17 = 40
// 23 - 17 = 6
// 23 * 17 = 391
// 23 / 17 = 1
// 23 % 17 = 6
// 23 ** 17 = 1.4105003956066297e+23
//
// Here is the code for the program:

var number1 = parseFloat(prompt('Enter the first number:'), 10);
var number2 = parseFloat(prompt('Enter the second number:'), 10);

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// Did the results of the program match what we expected? Why or why not? If not, can you fix it?

All but the first entry worked as expected. This is because the `prompt` method
returns a string which `+` then concatenates instead of coercing to numbers.
Correct it using `Number()`, `parseInt()`, or `parseFloat()` to convert the
numeric string to a number.
Best practice is to provide a radix as the second argument to specify the base
value of the number.
