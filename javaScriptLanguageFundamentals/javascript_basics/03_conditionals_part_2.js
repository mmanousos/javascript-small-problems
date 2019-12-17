Conditionals Part 2
One of the ways to manage the flow of a program is through the use of
conditionals. Go over the code below and specify how many unique execution paths
are possible.

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// five possible paths:
// line 6 -> line 8
// line 6 -> line 10
// line 13
// line 13 -> line 15
// line 13 -> line 15 -> line 17
