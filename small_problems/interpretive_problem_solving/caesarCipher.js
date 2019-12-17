// Caesar Cipher
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one 
// of the earliest and simplest ways to encrypt plaintext so that a message can 
// be transmitted securely. It is a substitution cipher in which each letter in 
// a plaintext is substituted by the letter located a given number of positions 
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3 
// positions, it will be substituted with the letter 'D'. This shift value is 
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be 
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper 
// case). Any other character is left as is. The substituted letters are in the 
// same letter case as the original letter. If the key value for shifting 
// exceeds the length of the alphabet, it wraps around from the beginning.

// Problem
// In: string of characters, key
// Out: encoded string of characters with letters swapped according to the 
// Caesar Cipher and key, all other characters remain as they are

// Rules: 
// - non letter characters are not affected
// - upper and lowercase letters are swapped, retaining their case
// - key determines which character to swap with
//   - if key === 3; A => D
//   - if key === 25; A => Z
// - if adding pushes letters out of character range, cycle back through from beginning
//   - if letter = Z && key = 1; cipher letter = A

// Assumptions: 
// - alphabet starts from 0 index (A = 0; Z = 25)
// - input will be a valid string

// Approach Brainstorming: 
// split string into array
// if key > 26 key -= 26
// map over array
//   if character is not a letter, return character
//   if character is a letter
//     convert to characterCode + add key => charCodeAt()
//     if uppercase 
//       if new value > 90 subtract 13
//     if lowercase
//       if new value > 122 subtract 13
//     convert back to letter => fromCharCode()
//     return new letter
// join array on '' and return

// Example / Tests 
// // simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

// // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// Data Structure 
// Array

function newChar(char, key, max) {
  let newCode = char.charCodeAt() + key;
  if (newCode > max) newCode -= 26;
  return String.fromCharCode(newCode);
}

function caesarEncrypt(string, key) {
  while (key > 26) {
    key -= 26;
  }
  const upperMax = 90;
  const lowerMax = 122;

  let characters = string.split('').map((char) => {
    if (char.match(/[^a-z]/i)) return char;
    else if (char.match(/[A-Z]/)) return newChar(char, key, upperMax);
    else return newChar(char, key, lowerMax);
  });

  return characters.join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"