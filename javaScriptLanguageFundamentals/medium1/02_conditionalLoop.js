// Conditional Loop
// The following program is expected to log each number between 0 and 9
// (inclusive) that is a multiple of 3. Read through the code shown below. Will
// it produce the expected result? Why or why not?

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// expected: it will get stuck at the first value that is evenly divisible by 3
// and log infinitely because there is no instruction to increment i after the
// console.log command
