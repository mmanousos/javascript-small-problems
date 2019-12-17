// Random Recipe Generator
// One bored and hungry evening we decided to randomly generate recipes. We 
// can't wait to see the first suggestions, but JavaScript raises a TypeError, 
// telling us that `dishName.join` is not a function. What is wrong?

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  var elements = array.slice();
  var randomElements = [];

  while (n > 0 && elements.length > 0) {
    var randomIndex = Math.floor(Math.random() * elements.length);
    var randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

var ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

var spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

var extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

var adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
var firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
var secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

// var dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// var dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

// revision
var dishName = [random(adjective), random(firstNoun), random(secondNoun)];
var dish = [random(ingredients, 3), random(spices, 2), random(extras, 1)];
console.log(random(ingredients, 3));
console.log(dish);
// or even better from the Course Solution
// var dishName = random(adjective)
//   .concat(random(firstNoun))
//   .concat(random(secondNoun));

// var dish = random(ingredients, 3)
//   .concat(random(spices, 2))
//   .concat(random(extras, 1));

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));

// as written `dishName` is not an array, so the `Array.join` method can not be 
// called on it. Instead, we can revise `dishName` and `dish` to arrays and then
//  use `join` on them.

// my solution does not add spaces between elements of the various ingredients 
// in `dish` but the Course Solution does. I think when using `join` on my 
// array, it flattens the inner array and then uses the separator to join those 
// elements. Using `concat` joins all of the elements into a 1D array so the 
// separator is applied as intended.