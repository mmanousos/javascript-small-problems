// Tree Slicing
// Implement a function, `sliceTree`, that is "similar" to the 
// `Array.prototype.slice` method, but this time for a DOM tree. The `sliceTree`
//  function takes two arguments: 
// the start index which is the parent node's `id` attribute and, 
// the end index which is the innermost child node's `id` attribute. 
// The function returns an array of `tagNames`. 

// Take note of the following when implementing the `sliceTree` function:

// It's similar to `slice` but different in the sense that `slice` isn't inclusive on the right hand side.
// The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
// Only consider element nodes.
// Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
// If the id attribute of the start or end index is not in the DOM, return undefined.
// If the slice is not feasible — there's no path connecting the element at the 
  // starting index to the ending index — return undefined.
// Use this HTML and sample run to test out your code:

// Problem
// In: two arguments - first is id of starting Element, second is id of end Element
// Out: array of nodeNames for the elements in between, inclusive 
// or `undefined` if either value is out of range or there is no path between them

// Rules: 
// Notes: 
// Assumptions: 

// Approach Brainstorming: 
// if value 1 is > value 2, return `undefined`

// search for elements with ids that match each value
// if one does not exist, return `undefined`

// recursively build array of all descendants of first value
// if second element is not included in that array, return `undefined`

// create `slice` array to hold results
// have getNodeName function that takes an element and returns its nodeName 

// - take first element
//   getNodeName of element and add to slice array 
// - get children of first element 
//   if any of children are second element
//     getNodeName of that element and add to slice array 
//     return slice array
//   else get children of each child element
//     check all grandchildren for matches, etc.

// collection of children 
//   iterate over collection
//   if any are second element
//     getNodeName & add to slice array
//   else get children and recursively pass to function again       

// start at second element
// getNodeName and unshift to slice array
// get parent of that element 
//   getNodeName and unshift to slice array
//   if element matches element 
//     return slice array 
//   else 
//     repeat function passing in current element  
// if element attribute `'id'` === null ('BODY' element does not have an 'id')
//   return `undefined`

// Algorithm
// BEGIN
//   SET first = element for id1
//   SET last = element for id2
//   if first is null, last is null, id2 > id1
//     return `undefined`
//   SET slice = []
//   get nodeName for last and add to slice 
//     - recursive function that takes element as argument - 
//       get parent of current element
//       if attribute id of parent === null
//         return `undefined`
//       get nodeName of parent and add to slice
//       if parent === first 
//         return slice
//       else 
//         pass current element back to recursive function
// END
// => check against test cases
// Does algorithm cover all test cases? 

function sliceTree(id1, id2) {
  let first = document.getElementById(String(id1));
  let last = document.getElementById(String(id2));
  if (id1 > id2 || !first || !last) {
    return undefined
  }
  let slice = [];
  slice.unshift(last.nodeName);
  (function checkParent(element) {
    let parent = element.parentElement;
    if (parent.getAttribute('id') === null) {
      slice = undefined;
      return;
    }
    slice.unshift(parent.nodeName);
    if (parent === first) {
      return slice;
    } else {
      checkParent(parent);
    }
  })(last);
  return slice;
}

<!doctype html>
<html>
  <head>
    <title>Tree Slicing</title>
  </head>
  <body>
    <article id="1">1
      <header id="2">2
        <span id="3">3
          <a href="#" id="4">4</a>
        </span>
      </header>
      <main id="5">5
        <section id="6">6
          <p id="7">7
            <span id="8">8
              <strong id="9">9
                <a href="#" id="10">10</a>
              </strong>
            </span>
          </p>
        </section>
        <section id="11">11
          <p id="12">12
            <span id="13">13
              <strong id="14">14
                <a href="#" id="15">15</a>
              </strong>
            </span>
          </p>
          <p id="16">16
            <span id="17">17
              <strong id="18">18
                <a href="#" id="19">19</a>
              </strong>
            </span>
            <span id="20">20
              <strong id="21">21
                <a href="#" id="22">22</a>
              </strong>
            </span>
          </p>
        </section>
      </main>
      <footer id="23">23
        <p id="24">24</p>
      </footer>
    </article>
  </body>
</html>

> sliceTree(1, 4);
= ["ARTICLE", "HEADER", "SPAN", "A"]
> sliceTree(1, 76);
= undefined
> sliceTree(2, 5);
= undefined
> sliceTree(5, 4);
= undefined
> sliceTree(1, 23);
= ["ARTICLE", "FOOTER"]
> sliceTree(1, 22);
= ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
> sliceTree(11, 19);
= ["SECTION", "P", "SPAN", "STRONG", "A"]