// Vigenere Cipher
// The Vigenere Cipher encrypts alphabetic text using polyalphabetic 
// substitution. It uses a series of Caesar Ciphers based on the letters of a 
// keyword. Each letter of the keyword is treated as a shift value. For 
// instance, the letter 'B' corresponds to a shift value of 1, and the letter 
// 'd' corresponds to a shift value of 3. In other words, the shift value used 
// for a letter is equal to its index value in the alphabet. This means that the 
// letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 
// 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by 
// applying the current shift value to a Caesar Cipher for that particular 
// character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Notice that in the example, the key isn't moved forward if the character 
// isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only 
// encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword 
// doesn't matter—in other words, the resulting encryption won't change 
// depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula 
// recta: https://en.wikipedia.org/wiki/Tabula_recta. Each row of the table 
// corresponds to a Caesar Cipher encryption using the columns' character letter 
// as a shift value.

// Problem
// In: string containing letter and non-letter characters, key word to encrypt
// Out: new string of original string encoded using Vigenere Cipher

// Rules: 
// - letters of key word correspond to numbers 0-25 (a/A = 0; z/Z = 25)
// - letters of original string should be shifted according to the Caeser Cipher 
// using the key word letter they line up with. 
//   - plaintext: Pine
//   - keyword:   meat 
//   - key:       m: 12; e: 4; a: 0; t: 19
//   - encoding:  Bmnx

// Notes: use Caeser Cipher solution from previous exercise
// Assumptions: 
// - input will be two valid strings
// - case of key word can be ignored

// Approach Brainstorming: 
// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// toLowerCase and split keyword into array of characters
// map keyword to array of corresponding index values from alphabet constant

// counter = 0;
// split string to array of characters 
// map over array
//   if character /[^A-Z]/i return character 
//   else newChar = caeserCipher(character, keyArray[counter])
//     if (counter += 1 > keyArray.length) counter = 0 : counter += 1

// return charactersArray.join('');

// Example / Tests 
// vigenereCipher('Pineapples don't go on pizzas!', 'meat');

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

function determineKeyValues(key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return key.toLowerCase().split('').map((char) => alphabet.indexOf(char));
}

function vigenereEncrypt(string, key) {
  const keyValues = determineKeyValues(key);

  let counter = 0;
  return string.split('').map((char) => {
    if (char.match(/[^a-z]/i)) {
      return char;
    } else {
      newLetter = caesarEncrypt(char, keyValues[counter]);
      counter = (counter + 1 >= keyValues.length) ? 0 : counter += 1;
      return newLetter; 
    }
  }).join('');
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "meat") === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereEncrypt("$@$#%#!", "meat") === "$@$#%#!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "MeAt") === "Bmnxmtpeqw dhz'x gh ar pbldal!");