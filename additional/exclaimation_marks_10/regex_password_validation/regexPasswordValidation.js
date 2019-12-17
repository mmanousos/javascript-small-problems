// Problem
// In: string
// Out: boolean representing if the string is a valid password

// Rules: 
// - valid password contains:
//   - only alphanumeric characters
//       /[a-z0-9]/i
//   - at least 6 characters
//       {6,}
//   - 1 lowercase letter 
//       [a-z]+
//   - 1 uppercase letter
//       [A-Z]+
//   - 1 number
//       [0-9]+

function validate(password) {
  return /[a-z]/.test(password) && /[A-Z]/.test(password) && 
         /[0-9]/.test(password) && /^[a-z0-9]{6,}$/i.test(password);
}

console.log(validate('djI') === false);
console.log(validate('djI38D55') === true);
console.log(validate('a2.d412') === false);
console.log(validate('JHD5FJ53') === false);
console.log(validate('!fdjn345') === false);
console.log(validate('jfkdfj3j') === false);
console.log(validate('123') === false);
console.log(validate('abc') === false);
console.log(validate('Password123') === true);
console.log(validate('0Pas12') === true);

from CodeWars: 
/**
* positive lookahead is used here to ensure that at least one of each character set is available
* you need to allow every character (.*) before your lookahead character set, 
* except you want to ensure the expression starts with i.e. a lowercase character.
* Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
* The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
* characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.
**/
return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);