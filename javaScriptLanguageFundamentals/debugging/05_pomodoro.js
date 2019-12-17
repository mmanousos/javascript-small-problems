// Pomodoro
// The following code demonstrates the Pomodoro technique. Although it seems to
// work in principle, it never prints the minute count from line 11. What is
// wrong?

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) { // minutes is `undefined` here
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');
// console.log(`sessions: ${sessions}, checkmarks: ${checkmarks}, tasks: ${tasks}`);
  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  // var minutes = 0;
  minutes = 0;
  pomodoro();
}

pomodoro();

// because the original program defines `minutes` using `var` on line 9 and
// again on line 39, the second declaration is hoisted. The variable is defined
// but not assigned until later and since it has the same name, it shadows the
// first.
