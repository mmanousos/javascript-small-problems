// Search Word Part 1
// Write a function that takes a word and a string of text as arguments, and 
// returns an integer representing the number of times the word appears in the 
// text.

// You may assume that the word and text inputs will always be provided.

//   Example:

// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('sed', text);      // 3

// Problem
// In: search term and text
// Out: count of the number of times the term appears in the text

// Assumptions: 
// - term and input will always be provided and both with be valid strings
// - if term doesn't appear, return 0
// - matches are case insensitive

// Approach Brainstorming:

// Approach 1
// - use match with regex of term
// - return length of match array

// Approach 2
// - split on ' '
// - filter array for term
// - return length of array

// Approach 3
// - use counter 
// - split on ' '
// - forEach
//   - increment counter if word === term

// Approach 4
// - split on ' '
// - reduce
//   - sum if word === term 


using RegEx to find matches
function searchWord(term, string) {
  const matches = string.match(new RegExp(term, 'gi'))
  return matches ? matches.length: 0;
}

using reduce
function searchWord(term, string) {
  return string
          .split(' ')
          .reduce((sum, word) => {
            if (word.match(new RegExp(term, 'i'))) return sum += 1;
            return sum;
          }, 0);
}

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('apple', text));      // 0

// Further Exploration
// The current solution matches the word even when it is just a part of a bigger 
// word, instead of a whole word by itself. For example, when searching for 
// 'qui' in the text, this solution would also return 'quia' as a match:

// searchWord('qui', text);      // should return 4, NOT 13
// Can you refactor the current solution so that it only matches whole words? In 
// addition to this, can you also include input validation to handle cases in 
// which one or both arguments are missing?

// Problem
// In: term, string
// Out: number of times term appears in string

// Rules: 
// - whole word matches only

// Notes:
// Assumptions:
// - matches should be case insensitive
// - term or string may be missing -> validate input and handle these cases
// - arguments provided will be valid strings

// Approach Brainstorming:

// Approach 1
// - split string on ' '
// - filter based on word === term
// - return matches.length or 0

// Approach 2 - regex
// - search for \b term \b/gi

function searchWholeWord(term, string) {
  if (term === undefined || string === undefined) {
    return 'Please provide a valid search term and string.';
  }

  const matches = string.split(' ').filter((word) => word === term);
  return matches ? matches.length : 0;
}

// based on Xullnn's solution
function searchWholeWord(term, string) {
  if (term === undefined || string === undefined) {
    return 'Please provide a valid search term and string.';
  }

  return (string.match(new RegExp('\\b' + term + '\\b', 'ig')) || []).length; 
}


console.log(searchWholeWord('qui', text));  // 4
console.log(searchWholeWord('happy')); // Please provide a valid search term and string