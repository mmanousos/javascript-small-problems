// Bannerizer
// Write a function that will take a short line of text, and write it to the
// console log within a box.

// Examples:

// logInBox('To boldly go where no one has gone before.');
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// You may assume that the output will always fit in your browser window.

// Problem
// in: string
// out: multiple strings that print as the string within a box
//
// Algorithm
// BEGIN
//   SET length = string.length
//   SET edge = '+-' + '-'.repeat(length) + '-+'
//   SET padding = '| ' + ' '.repeat(length) + ' |'
//   SET message = `| ${string} |`
//
//   console.log(`${edge}\n${padding}\n${message}\n${padding}\n${edge}`)
// END

function logInBox(string) {
  let length = string.length;
  let edge = '+-' + '-'.repeat(length) + '-+';
  let padding = '| ' + ' '.repeat(length) + ' |';
  let message = `| ${string} |`;

  console.log(`${edge}\n${padding}\n${message}\n${padding}\n${edge}`);
}

// function logInBox(message) {
//   let length = message.length;
//   let edge = '+' + '-'.repeat(length + 2) + '+';
//   let padding = '|' + ' '.repeat(length + 2) + '|';
//
//   console.log(`${edge}\n${padding}\n| ${message} |\n${padding}\n${edge}`);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// Further Exploration
// Modify this function so that it truncates the message if it doesn't fit
// inside a maximum width provided as a second argument (the width is the width
// of the box itself). You may assume no maximum if the second argument is
// omitted.

// function logInBoxTruncated(message, boxSize) {
//   if (boxSize) {
//     message = message.substring(0, boxSize-4);
//   }
//
//   logInBox(message)
// }

function logInBox(string, boxSize) {
  if (boxSize && string.length > boxSize) string = string.substring(0, boxSize-4);
  let length = string.length;
  let edge = '+-' + '-'.repeat(length) + '-+';
  let padding = '| ' + ' '.repeat(length) + ' |';
  let message = `| ${string} |`;

  console.log(`${edge}\n${padding}\n${message}\n${padding}\n${edge}`);
}
//
logInBoxTruncated('To boldly go where no one has gone before.', 20);
logInBoxTruncated('To boldly go where no one has gone before.');

// For a real challenge, try word wrapping messages that are too long to fit,
// so that they appear on multiple lines but are still contained within the box.

// Problem
// in: string & optional box size
// out: string broken into incremental pieces if original is too long to fit into
// box and then printed within a box.
//
// Algorithm
// BEGIN
//   if size is provided,
//     break string into array of substrings of that length - 4
//     iterate through substring array making each into a string padded with '| ' and ' |' on each side
//     join them into a single string joined with '\n' newline characters
//     pass into logInBox function
//   else
//     logInBox
// END

// works but is a bit convoluted
function padMessage(string, length) {
  let padding = '';
  for (let i = length - string.length; i > 0; i -= 1) {
    padding += ' ';
  }
  return string + padding;
}

function logInBox(message, size) {
  let length;
  let edge;
  let padding;

  if (typeof message === 'object') {
    length = message[0].length;
    message = message.map((string) => `| ${string} |`).join("\n");
  } else {
    length = message.length;
    message = `| ${message} |`;
  }

  edge = '+' + '-'.repeat(length + 2) + '+';
  padding = '|' + ' '.repeat(length + 2) + '|';
  console.log(`${edge}\n${padding}\n${message}\n${padding}\n${edge}`);
}

function logLongStringInBox(message, size) {

  if (size && message.length > (size - 4)) {
    let measure = size - 4;
    let substrings = [];
    let j = 0;

    for (let i = measure; i < message.length + measure; i += measure) {
      let string = message.substring(j, i);
      if (string.length < measure) string = padMessage(string, measure);
      substrings.push(string);
      j += measure;
    }

    message = substrings;
  }
  logInBox(message);
}

// refactor to make it more coherent
// if there is a size argument provided, break the message into array substrings and return

// function padMessage(string, length) {
//   return string += ' '.repeat(length - string.length);
// }
// refactor of this function that then became unnecessary once I figured out how to use `padEnd`

function substrings(message, size) {
  let measure = size - 4;
  let substrings = [];
  let j = 0;

  for (let i = measure; i < message.length + measure; i += measure) {
    let string = message.substring(j, i);
    if (string.length < measure) string = string.padEnd(measure);
    substrings.push(string);
    j += measure;
  }

  return substrings;
}

function logInBox(message, size) {
  let length = message.length;
  let edge;
  let padding;

  if (size && length >= size) {
    message = substrings(message, size);
    length = message[0].length;
    message = message.map((string) => `| ${string} |`).join("\n");
  } else if (size && length < size) { // additional edge case for size: pad strings shorter than size provided
    length = size - 4;
    message = `| ${message.padEnd(length)} |`;
  } else {
    message = `| ${message} |`;
  }

  edge = '+' + '-'.repeat(length + 2) + '+';
  padding = '|' + ' '.repeat(length + 2) + '|';
  console.log(`${edge}\n${padding}\n${message}\n${padding}\n${edge}`);
}



var longStr =
'Unlike other automakers, Tesla does not use individual large battery cells, but\
 thousands of small, cylindrical, lithium-ion commodity cells like those used in\
 consumer electronics. It uses a version of these cells that is designed to be c\
heaper to manufacture and lighter than standard cells by removing some safety fe\
atures. According to Tesla, these features are redundant because of the advanced\
 thermal management system and an intumescent chemical in the battery to prevent\
 fires.';

logInBox(longStr, 30);
logInBox(longStr, 50);
logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 50);
logInBox('');


// Gooi's further exploration solution - really slick, breaking on words not mid word
// possible improvement would be to assign edges and padding rows to variables as I did
function logInBox(text, width) {
  var i;
  var j;
  var line = '';

  console.log(`+-${'-'.repeat(width)}-+`);
  console.log(`| ${' '.repeat(width)} |`);

  for (i = 0; i < text.length; i++) {
    line += text[i];
    // if the line's character count exceeds specified width
    if (line.length >= width) {
      // we count from the last character of the line until a space is found
      for (j = 1; j < width; j++) {
        if (line[width - j] === ' ') {
          // we log the current line, minus any leftover characters counting from the space character
          console.log(`| ${line.substring(0, width - j).padEnd(width)} |`);

          // we start a new line beginning with the leftover characters
          line = line.substring(width - j + 1, width);
        }
      }
    }
  }

  console.log(`| ${line.padEnd(width)} |`); // the leftover line is logged
  console.log(`| ${' '.repeat(width)} |`);
  console.log(`+-${'-'.repeat(width)}-+`);
}
