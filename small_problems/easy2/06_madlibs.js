// Madlibs
// Madlibs is a simple game where you create a story template with "blanks" for
// words. You, or another player, then construct a list of words and place them
// into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb,
// and an adjective, and injects them into a story that you create.

// Example:
//
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!

function madlibs() {
  let noun = prompt('Enter a noun: ');
  let verb = prompt('Enter a verb: ');
  let adjective = prompt('Enter a adjective: ');
  let adverb = prompt('Enter a adverb: ');

  alert(`The ${adjective} ${noun} ${verb} ${adverb}. Well, that's just ridiculous!`)

}

madlibs();

// Nick Johnson's solution is quite clever:
let words = ['a noun', 'a verb', 'an adjective', 'an adverb'].map(w => prompt(`Enter ${w}:`));
console.log(`Do you ${words[1]} your ${words[2]} ${words[0]} ${words[3]}? That's hilarious!`);
// create an array of the text we want to prompt the user with, then map it to their responses
// pull from the array for the resulting string.
