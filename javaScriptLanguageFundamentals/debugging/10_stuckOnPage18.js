// Stuck on Page 18
// The following code is a simplified (and not so serious) model of how we read
// a software development book. But running this code results in a stack
// overflow. What is wrong?

var totalPages = 364;
var energy = 100;
var currentPage = 1;

function read() {
// var currentPage = 1; - move this variable declaration out of the function!

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log('Made it to page ' + String(currentPage) + '.');

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

// this is a function that recursively calls itself.
// everytime it is called, the `currentPage` is declared as `1`
// we can move the variable definition for `currentPage` to outside of the
// function along with the other variable definitions and assignments
