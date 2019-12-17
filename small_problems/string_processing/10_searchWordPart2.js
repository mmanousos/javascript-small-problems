// Search Word Part 2
// The function from the previous exercise returns the number of occurrences of 
// a word in some text. Although this is useful, there are also situations in 
// which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and a string of text as 
// arguments, and returns the text with every instance of the word highlighted. 
// To highlight a word, enclose the word with two asterisks ('**') on each side 
// and change every letter of the word to uppercase 
// (e.g., '**HIGHLIGHTEDWORD**').

// Example:

// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('sed', text);
// // returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed**SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

// Problem
// In: term string
// Out: same string but with every instance of term highlighted (surrounded by ** 
//   and uppercased)

// Assumptions: 
// - no change to string if word does not appear
// - account for either argument not being present

// Approach Brainstorming:
// use regex and replace
//  - capture group(s) and then adjusted replace?
//  (is this possible?)

// split map and join

// function searchWord(term, string) {
//   if (arguments.length !== 2) return 'Please provide valid term and string.';

//   return string
//       .split(' ')
//       .map((word) => {
//         return word.toLowerCase() === term ? `**${word.toUpperCase()}**` : word; 
//       })
//       .join(' ');
// }

// function searchWord(term, string) {
//   if (arguments.length !== 2) return 'Please provide valid term and string.';

//   let pattern = new RegExp(term, 'gi');
//   return string.replace(pattern, `**${term.toUpperCase()}**`);
// }

// console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

// Further Exploration
// Like in the previous exercise, try implementing a solution that only matches 
// whole words instead of parts of words.

// function searchWord(term, string) {
//   if (arguments.length !== 2) return 'Please provide valid term and string.';
  
//   let pattern = new RegExp('\\b' + term + '\\b', 'gi');
//   return string.replace(pattern, `**${term.toUpperCase()}**`);
// }

// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('qui', text));
// // returns
// // "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos **QUI** ratione voluptatem sequi nesciunt. Neque porro quisquam est, **QUI** dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit **QUI** in ea voluptate velit esse quam nihil molestiae consequatur, vel illum **QUI** dolorem eum fugiat quo voluptas nulla pariatur?"
// console.log(searchWord('apple', text));
// // returns original string with nothing highlighted

function foo(list) {
  return list.map(function (word) {
    return word.match(/[aeiou]/i) || [];
  }).reduce(function (acc, letterList) {
    return acc + letterList.length;
  }, 0);
}
list = ['cart', 'truck', 'cart', 'train'];

let matches = list.map((word) => word.match(/[aeiou]/gi) || []);
let count = matches.reduce((acc, matches) => {
  return acc + matches.length;
  }, 0);
console.log(count);



// console.log(foo(['cart', 'truck', 'cart', 'train']) ===	5);