// Selection Filters
// Given the HTML below, write some JavaScript code that updates the options on 
// one dropdown when the selection in the other dropdown changes. For instance, 
// when the user chooses an option under `Classifications`, the items in the 
// `Animals` dropdown should change accordingly. Use the lookup tables below to 
// see which animals and classifications go together.

<form id="selection-filters" method="post" action="#">
  <select id="animal-classifications">
    <option value="Classifications" selected>Classifications</option>
    <option value="Vertebrate">Vertebrate</option>
    <option value="Warm-blooded">Warm-blooded</option>
    <option value="Cold-blooded">Cold-blooded</option>
    <option value="Mammal">Mammal</option>
    <option value="Bird">Bird</option>
  </select>
  <select id="animals">
    <option value="Animals" selected>Animals</option>
    <option value="Bear">Bear</option>
    <option value="Turtle">Turtle</option>
    <option value="Whale">Whale</option>
    <option value="Salmon">Salmon</option>
    <option value="Ostrich">Ostrich</option>
  </select>
  <button id="clear">Clear</button>
</form>

Selection Change with Filter1: Animal Classifications

Selection	    Animals Options
Vertebrate	  Bear, Turtle, Whale, Salmon, Ostrich
Warm-blooded	Bear, Whale, Ostrich
Cold-blooded	Salmon, Turtle
Mammal	      Bear, Whale
Bird	        Ostrich


Selection Change with Filter2: Animals

Selection	    Animal Classifications Options
Bear	        Vertebrate, Warm-blooded, Mammal
Turtle	      Vertebrate, Cold-blooded
Whale	        Vertebrate, Warm-blooded, Mammal
Salmon	      Vertebrate, Cold-blooded
Ostrich	      Vertebrate, Warm-blooded, Bird

// When the user clicks the "Clear" button, the program should reset both 
// dropdowns to their default values.

algorithm
get array of children elements of classifications selector 
get array of children elements of animals selector 
get access to classifications selector 
  add listener
    determine the selected option value
    filter to get the animals that ARE and ARE NOT in that classification
    iterate over these animals and add class 'hidden' to them
    iterate over the ones that ARE and remove class 'hidden' from them

get access to animals selector 
  add listener
    determine the selected option value 
    filter to get the classifications that ARE and ARE NOT in that animal's classification
    iterate over these classifications and add class 'hidden' to them
    iterate over the ones that ARE and remove class 'hidden' from them
