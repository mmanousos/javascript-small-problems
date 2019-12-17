// Stack Machine Interpretation
// A stack is a list of values that grows and shrinks dynamically. A stack may 
// be implemented as an Array that uses two Array methods: Array.prototype.push 
// and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of 
// values. Each operation in the language operates on a register, which can be 
// thought of as the current value. The register is not part of the stack. An 
// operation that requires two values pops the topmost item from the stack 
// (i.e., the operation removes the most recently pushed value from the stack), 
// operates on the popped value and the register value, and stores the result 
// back in the register.

// Consider a MULT operation in a stack-and-register language. It multiplies the 
// stack value with the register value, removes the value from the stack, and 
// stores the result back in the register. For example, if we start with a stack 
// of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value 
// of 7, the MULT operation transforms the stack to [3, 6] (the 4 is removed), 
// and the result of the multiplication, 28, is left in the register. If we do 
// another MULT at this point, the stack is transformed to [3], and the register 
// is left with the value 168.

// Write a function that implements a miniature stack-and-register-based 
// programming language that has the following commands (also called operations 
// or tokens):

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the 
  // register.
// ADD : Pop a value from the stack and add it to the register value, storing 
  // the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, 
  // storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, 
  // storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, 
  // storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, 
  // storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and 
  // MOD).

// Programs will be supplied to your language function via a string argument. 
// Your function may assume that all arguments are valid programs — i.e., they 
// will not do anything like trying to pop a non-existent value from the stack, 
// and they will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

Examples:

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// Problem
// In: string containing numbers and commands / tokens
// Out: results only logged if token is PRINT

// Rules:
// - use push and pop to add / remove values from stack
// - register holds current value 
// - stack holds remaining values
// - all operations are integer operations
// - number sets value of register, doesn't get added to stack
// - PUSH adds number from register to stack, keeping it in register also
// - ADD pops value from stack and adds to register value; stores sum in register
// - SUB pops value from stack and subtracts from register value; stores result in register
// - MULT pops value from stack and multiplies with register value; stores product in register
// - DIV pops value from stack and divides into register value; stores integer result in register
// - MOD pops value from stack and divides into register value; stores integer result in register
// - POP removes topmost item from stack and places it in register
// - PRINT prints the register value

// Notes:
// Assumptions:
// - commands contain valid strings with valid programs: valid tokens and existing values

// Approach Brainstorming:
// - create empty array for stack
// - create register set to 0
// - split string on ' '
// - iterate over elements of resulting array
// - for each number string encountered, set the register value to that value
// - for each token encountered, execute the appropriate operation

// Data Structure
// Array

// Algorithm
// BEGIN
//   SET stack = []
//   SET register = 0
//   command.split(' ').forEach((value) => {
//     if value.match(/[0-9]/) register = Number(value)
//     else if value === 'PUSH'
//       stack.push(register)
//     else if value === 'ADD' 
//       register += stack.pop()
//     else if value === 'SUB'
//       register -= stack.pop()  
//     else if value === 'MULT'
//       register *= stack.pop()
//     else if value === 'DIV'
//       register /= Math.floor(stack.pop())
//     else if value === 'MOD'
//       register %= Math.floor(stack.pop())
//     else if value === 'POP'
//       register = stack.pop()
//     else if value === 'PRINT'
//       console.log(register)
//   })
// END
// => check against test cases
// Does algorithm cover all test cases?

// function minilang(program) {
//   const stack = [];
//   let register = 0;
//   program.split(' ').forEach((value) => {
//     if (value.match(/[0-9]/)) 
//       register = Number(value);
//     else if (value === 'PUSH')
//       stack.push(register);
//     else if (value === 'ADD') 
//       register += stack.pop();
//     else if (value === 'SUB')
//       register -= stack.pop();  
//     else if (value === 'MULT')
//       register *= stack.pop();
//     else if (value === 'DIV')
//       register = Math.floor(register / stack.pop()) ;
//     else if (value === 'MOD')
//       register = Math.floor(register % stack.pop());
//     else if (value === 'POP')
//       register = stack.pop();
//     else if (value === 'PRINT')
//       console.log(register);
//   });
// }

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // // 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// Further Exploration
// Refactor the minilang function to include some error handling. In particular, 
// the function should detect and report empty stack conditions, and invalid 
// tokens in the program. Ideally, the function should return an error message 
// if an error occurs, or undefined if the program runs successfully.

// empty stack conditions - 
// if the program calls an operation but the stack.length === 0
// return 'Unable to complete [command] The stack is empty.'

// invalid tokens - 
// if command does not match any of the values 
//   return 'That is an invalid command'

// else return undefined  

function minilang(program) {
  const stack = [];
  let register = 0;
  const stackCommands = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];
  const stackError = new Error('Unable to execute the command. The stack is empty.');
  const commandError = new Error('That is an invalid command.');

  const commands = parseString(program);
  for (let i = 0; i < commands.length; i += 1) {
    let value = commands[i];
    if (Number.isInteger(value)) 
      register = value;
    else if (value === 'PUSH')
      stack.push(register);
    else if (value === 'PRINT')
      console.log(register);
    else if (stackCommands.includes(value)) {
      if (stack.length === 0) {
        return stackError;  
      } else if (value === 'ADD') {
        register += stack.pop();
      } else if (value === 'SUB') {
        register -= stack.pop();
      } else if (value === 'MULT') {
        register *= stack.pop();
      } else if (value === 'DIV') {
        register = Math.floor(register / stack.pop());
      } else if (value === 'MOD') {
        register = Math.floor(register % stack.pop());
      } else if (value === 'POP') {
        register = stack.pop();
      }
    } else {
      return commandError;
    } 
  };

  return undefined;
}

function parseString(program) {
  return program.split(' ').map((value) => {
    return value.match(/[0-9]/) ? Number(value) : value;
  })
}

console.log(minilang('6 PUSH ASK'));       // invalid token error
console.log(minilang('POP PUSH'));         // empty stack error
console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8
// undefined

// Wendy Kuhn's solution - using an object to hold the functions for stack operations
var arithmeticTokens = {
  add: function (a, b) { return a + b },
  sub: function (a, b) { return a - b },
  mult: function (a, b) { return a * b },
  div: function (a, b) { return parseInt(a / b, 10) },
  mod: function (a, b) { return parseInt(a % b, 10) },
};

function minilang(tokenString) {
  var stack = [];
  var register = 0;
  var tokens = tokenString.toLowerCase().split(' ');

  tokens.forEach(function (token) {
    if (Object.keys(arithmeticTokens).includes(token)) {
      register = arithmeticTokens[token](register, stack.pop());
    } else if (token === 'pop') {
      register = stack.pop();
    } else if (token === 'push') {
      stack[stack.length] = register;
    } else if (token === 'print') {
      console.log(register);
    } else {
      register = parseInt(token, 10);
    }
  });
}