// Word Ladder
// Gemma and some friends are working on a complex program to generate word 
// ladders, transforming one word into another word one character at a time. The
//  smallest of her tasks is to print the resulting ladder to the screen.

// A "ladder" is simply an array of word strings; Gemma decides to transform 
// this array into a single string where each word within the string is 
// separated by a hyphen ('-'). For example, the array ['pig', 'pie', 'lie', 
// 'lit', 'let'] should be printed as the string 'pig-pie-lie-lit-let'.

// Upon first glance, Gemma's code below looks like it should work. But it 
// throws a TypeError, saying: Cannot read property 'forEach' of `undefined`. 
// Why is that?

var ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(function(word) {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// this code is missing semicolons throughout. 
// without a semincolon following the declaration of the variable `ladder`, the 
// array defined two lines later is interpreted as being part of that variable
// rather than its own data structure.
// adding a semicolon on line 15 corrects the error. 
// however, we should also add semicolons at the end of lines 19, 22, and 25.