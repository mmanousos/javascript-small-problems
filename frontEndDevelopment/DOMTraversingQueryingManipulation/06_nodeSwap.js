// Node Swap
// Write a function that takes two element `id`s as arguments and swaps the 
// positions of the elements represented by the `id`s. The function returns true
//  for valid swaps and undefined for invalid. To put the focus on the node 
// swapping functionality, you can assume that nodes will have a value for the 
// `id` attribute and two arguments will always be provided. Use the following 
// HTML and sample codes to test your output:

// Problem
// In: two element `id`s
// Out: swapped positions for the elements referenced by the provided `id`s
// returns true if the swap happens or undefined if it can not happen


// Rules: 
// nodes will have a value for the `id` attribute
// two arguments will always be provided

// Approach Brainstorming: 
// set the elements referenced by the ids to variables
  // if either is null, return undefined
// get children of each element as array
  // if (indexOf(element) !== -1) for either, return undefined

// create deepclones of each element element.cloneNode(true)
// insert the clones before each of the respective elements
  // element.insertAdjacentElement(beforebegin, clone)
// delete the originals 
  // element.remove()  

// set sibling = nextElementSibling of each 
// use insertAdjacentElement(beforebegin, newElement)
//   if nextElementSibling === null
//     use previousElementSibling & insertAdjacentElement(afterend, newElement)
//     if that is also null 
//       use parentElement & insert


// set parents of each the element to variables
  // if parent1 !== parent2, return undefined
// set the children array to variable
// determine which position each of the elements in question is currently
  // indexOf(element)
// if in 0 position, get nextElementSibling
// if in length - 1 position, get previousElementSibling
// element.insertAdjacentElement(position, newElement) 

// my original solution
function nodeSwap(id1, id2) {
  let one = document.getElementById(String(id1));
  let two = document.getElementById(String(id2));
  if (!one || !two) return undefined;

  let oneChildren = Array.from(one.children);
  let twoChildren = Array.from(two.children);
  if (oneChildren.indexOf(two) !== -1 || twoChildren.indexOf(one) !== -1) {
    return undefined;
  }

  cloneOne = one.cloneNode(true);
  cloneTwo = two.cloneNode(true);

  one.insertAdjacentElement('beforebegin', cloneTwo);
  two.insertAdjacentElement('beforebegin', cloneOne);

  one.remove();
  two.remove();

  return true;
}

// Refactor after looking at Course Solution and other students' solutions
// I was unfamiliar with the `replaceChild` method nor was I aware that I could 
// use the `contains` method on an element to check if another element was a 
// child of it.
function nodeSwap(id1, id2) {
  let one = document.getElementById(String(id1));
  let two = document.getElementById(String(id2));

  if (
    !one || 
    !two || 
    one.contains(two) ||
    two.contains(one)
    ) { return undefined }

  cloneOne = one.cloneNode(true);
  cloneTwo = two.cloneNode(true);
  parentOne = one.parentElement;
  parentTwo = two.parentElement;  

  parentOne.replaceChild(cloneTwo, one);
  parentTwo.replaceChild(cloneOne, two);
  return true;
}

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
    <div id="2"></div>
    <div id="3">
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
    </div>
  </body>
</html>

Invalid Swaps
// at least one of the id attributes doesn't exist
> nodeSwap(1, 20);
= undefined

// at least one of the nodes is a "child" of the other
> nodeSwap(1, 4);
= undefined
> nodeSwap(9, 3);
= undefined

Valid Swaps
// one swap
> nodeSwap(1, 2);

<!doctype html>

<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="2"></div>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
    <div id="3">
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
    </div>
  </body>
</html>

// multiple swaps
> nodeSwap(3, 1);
> nodeSwap(7, 9);

<!doctype html>
<html>
  <head>
    <title>Node Swap</title>
  </head>
  <body>
    <div id="3">
      <div id="9"></div>
      <div id="8"></div>
      <div id="7"></div>
    </div>
    <div id="2"></div>
    <div id="1">
      <div id="4"></div>
      <div id="5">
        <div id="6"></div>
      </div>
    </div>
  </body>
</html>