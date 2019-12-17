// Coloring
// Write a function `colorGeneration` that colors a specific generation of the 
// DOM tree. A generation is a set of elements that are on the same level of 
// indentation. We'll be using a "styled" HTML for this exercise to better 
// visualize the generations. You may use the `.generation-color` class to color
//  the specific generation. You can assume that only non-negative integers will
//  be provided as arguments.

// Problem
// In: non-negative integer representing the generation
//   meaning all elements that are nested to the same level as the element at the 
//   given id
// Out: rendered HTML with all elements at that level colored accordingly 
// (with `.generation-color` class applied to them)

// Assumptions: only non-negative integers will be provided as arguments

// Approach Brainstorming: 

/* doesn't work - starts at the wrong place */ 
// get element based on id provided
// backtrack to BODY, building an array of elements (use Tracing The Dom Tree function to build)
// determine how many subarray elements are in that array
// traverse the DOM 
  // for every element that is that number of elements down, apply the class

// set counter
// start at body 
// get children 
  // increment counter 
  // if counter === generation   
    // iterate over children, adding class to each
  // else 
    // iterate over children
      // get children 
        // increment counter
        // if counter === generation 
          // iterate over children, adding class to each
        // else ...repeat

  // counter = 0
  // document.body.children // get children 
  // counter += 1           // increment counter
  // if counter === generation 
  //                       // iterate over all child elements and add class
  // else 
  //   start with first child
  //   get children 
  //   childCounter = counter
  //   if counter === generation
  //     add class
  //   else
  //     get children 


  // counter = 0
  // document.body.firstElementChild // get first child
  // counter += 1
  // if counter === generation 
  //   iterate over all child elements an add class 
  // else 
  //   childrenCounter = 0
  //   child.firstElementChild
  //   childrenCounter += 1

// Course Solution updated to use ES6 
function colorGeneration(targetGeneration) {
  let generation = 0;
  let parents = [document.body];
  let elements;

  while (generation < targetGeneration) {
    generation += 1;
    elements = getAllChildrenOf(parents);
    parents = elements;
  }

  if (elements) {
    color(elements);
  }
}

function color(elements) {
  elements.forEach((element) => element.classList.add('generation-color'));
}

function getAllChildrenOf(parents) {  // takes the parents 
  return parents.map((element) => {
    return [].slice.call(element.children); // replaces them with thier children as discrete arrays
  }).reduce((collection, children) => {     
    return collection.concat(children);     // joins all the arrays into one
  }, []);
}



<!doctype html>
<html>

  <head>
    <title>Coloring</title>
    <style>
     body * {
         position: absolute;
         display: block;
         height: 50px;
         width: 50px;
         font-size: 14px;
         font-weight: normal;
         text-decoration: none;
         color: black;
         box-shadow: inset 0px 0px 8px -1px rgba(0,0,0,0.30);
     }

     article {
         margin-top: 10px;
         margin-left: 10px;
     }

     .child1x1, .child1x2, .child1x6, article {
         box-sizing: border-box;
         padding: 5px 0 0 5px;
     }

     .child1x1 {
         left: 50px;
         top: 0px;
     }

     .child1x2 {
         left: 50px;
         top: 50px;
     }

     .child1x6 {
         left: 50px;
         top: 250px;
     }

     .generation-color {
         background: #E0EAF1;
     }
    </style>
  </head>

  <body>
    <article id="1">1
      <header id="2" class="child1x1">2
        <span id="3" class="child1x1">3
          <a href="#" id="4" class="child1x1">4</a>
        </span>
      </header>
      <main id="5" class="child1x2">5
        <section id="6" class="child1x1">6
          <p id="7" class="child1x1">7
            <span id="8" class="child1x1">8
              <strong id="9" class="child1x1">9
                <a href="#" id="10" class="child1x1">10</a>
              </strong>
            </span>
          </p>
        </section>
        <section id="11" class="child1x2">11
          <p id="12" class="child1x1">12
            <span id="13" class="child1x1">13
              <strong id="14" class="child1x1">14
                <a href="#" id="15" class="child1x1">15</a>
              </strong>
            </span>
          </p>
          <p id="16" class="child1x2">16
            <span id="17" class="child1x1">17
              <strong id="18" class="child1x1">18
                <a href="#" id="19" class="child1x1">19</a>
              </strong>
            </span>
            <span id="20" class="child1x2">20
              <strong id="21" class="child1x1">21
                <a href="#" id="22" class="child1x1">22</a>
              </strong>
            </span>
          </p>
        </section>
      </main>
      <footer id="23" class="child1x6">23
        <p id="24" class="child1x1">24</p>
      </footer>
    </article>
  </body>
</html>