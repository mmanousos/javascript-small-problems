// Full Moon
// Run the following code. Why is every warning displayed twice? Change the code
// so that each warning is displayed only once, as intended.

// var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// var isMidnight = true;
// var isFullmoon = true;
//
// function isTransformable(species) {
//   return species[0] === 'w';
// }
//
// function transform(species) {
//   return 'were' + species;
// }
//
// var i;
// for (i = 0; i < species.length; i++) {
//   var thisSpecies = species[i];
//   var newSpecies;
//
//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//       newSpecies = transform(thisSpecies);
//   }
//
//   if (newSpecies) {
//     console.log('Beware of the ' + newSpecies + '!');
//   }
// }

// the for loop continues until each of the species have been examined for their
// transformability. after one transformed species wraning is logged, the
// `newSpecies` variable remains so even though the next entry may not
// necessarily be transformable. the `if (newSpecies)` validation evaluates as
// `true` so the same alert is displayed another time.

// we can either log the warning immediately after the transforming `species`
// or reassign the variable after logging it.
 // on line 23, replace `newSpecies = transform(thisSpecies)` with `console.log(transform(thisSpecies))`
 // or insert new code on line 28: `newSpecies = null;` or `newSpecies = undefined`
// I prefer to log the warning change immediately since the intent is more
// clear and results in less code.

// or we can use the block-scoped ES6 variable declaration keyword `let` to
// define `newSpecies` and it will be reset on each iteration over our original
// `species` array

// var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// var isMidnight = true;
// var isFullmoon = true;
//
// function isTransformable(species) {
//   return species[0] === 'w';
// }
//
// function transform(species) {
//   return 'were' + species;
// }
//
// var i;
// for (i = 0; i < species.length; i++) {
//   var thisSpecies = species[i];
//   var newSpecies;
//
//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//       console.log('Beware of the ' + transform(thisSpecies) + '!');
//   }
// }

var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
var isMidnight = true;
var isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return 'were' + species;
}

var i;
for (i = 0; i < species.length; i++) {
  let thisSpecies = species[i];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log('Beware of the ' + newSpecies + '!');
  }
}
