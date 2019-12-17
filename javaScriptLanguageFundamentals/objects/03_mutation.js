// Mutation
// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// no change is reflected because the elements in array1 are reassigned but not array2
console.log(array1);
// entries that start with 'C' are uppercase


// Further Exploration
// What would happen if an object literal was part of the array1 elements pushed
// to array2? Would changes made to the object literal in array1 be reflected in
// array2?

// yes, changes would be reflected

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', { movies: ['The Three Stooges in Orbit', 'The Three Stooges Meet Hercules'] }, 'Harpo', 'Chico', 'Groucho', 'Zeppo', { movies: ['Duck Soup', 'A Night at the Opera']} ];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].movies !== undefined) {
    let index = array1[i].movies.indexOf('The Three Stooges in Orbit');
    if (index !== -1) {
      array1[i].movies[index] = 'The Three Stooges Go Around The World In A Daze';
    }
  }
}

console.log(array2);


// How would you change the code so that any changes made to array1 in the
// second for loop get reflected to array2?

// assign array1 as the value of array2 when it is declared.
// then because the two variables refer to the same object, changes to one will
// be reflected in the other

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = array1;
var i;

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
