// Ddaaiillyy ddoouubbllee
// Write a function that takes a string argument, and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// Problem
// in: string with possible consecutive duplicate characters
// out: new string with any consecutive duplicates reduced into a single character
//
// Example / Tests
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""
//
//
// Data Structure
// string
//
// Algorithm
// BEGIN
//   SET newString = ''
//   SET current = ''
//   possible guard clause if original string is empty or 1 character
//     return original string
//
//   iterate over string
//     if character matches value of current
//       continue
//     else
//       add current to newString
//       reassign current to character
//   return newString
// END

function crunch(string) {
  let newString = '';
  let current = '';
  let leng = string.length;

  if (leng === 1 || leng === 0) return string;

  for (let i = 0; i <= leng; i += 1) {
    if (string[i] !== current) {
      newString += current;
      current = string[i];
    }
  }

  return newString;
}

// Course Solution - adds the values to a new string immediately then checks if
// the previous letter is the same as the current
function crunch(text) {
  var index = 0;
  var crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

// Further Exploration
// You may have noticed that the solution continues iterating until index points
// past the end of the string. As a result, on the last iteration, text[index]
// is the last character in text, while text[index + 1] is undefined. Why does
// it do this? What happens if it stops iterating when index is equal to
// text.length - 1?

// Pretty sure this the same issue I had when I did my first pass of my
// solution: it will not get to the final character in the original string and
// our solution may be one character short.

// It's also possible to solve this using regular expressions. For a nice
// challenge, give this a try with regular expressions. Can you think of any
// other solutions that don't use regular expressions?

// my solution doesn't use a regular expression but is similar to the course
// solution. another way to do it would be to split all of the characters into
// an array iterate through retaining only the unique values and join the array
// to a string. (Would be easy with Ruby's Array#uniq method but I don't believe
// there is an equivalent in JavaScript)
// Or we could iterate over the characters of the string adding them to a hash
// or set object, if it already existed in the data structure, we would move on,
// otherwise add the new value, then either get keys and join (hash) or join
// from set back into a string to return.

// RegEx - I was unable to conceptualize how to solve this
// Looking at another student's solution, it makes total sense.
// We globally look for any repeated character, save it into a capture group,
// then replace that repetition with the single character.

function crunch(string) {
  return string.replace(/(.)\1+/g, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double"); // "daily double"
console.log(crunch('4444abcabccba') === "4abcabcba");              // "4abcabcba"
console.log(crunch('ggggggggggggggg') === "g");                    // "g"
console.log(crunch('a') === "a");                                  // "a"
console.log(crunch('') === "");                                    // ""
