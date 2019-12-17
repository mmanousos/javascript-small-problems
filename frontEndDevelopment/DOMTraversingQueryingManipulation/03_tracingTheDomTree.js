// Tracing the DOM Tree
// Write a JavaScript function that takes an element's `id` and returns the DOM 
// tree of the element in a two-dimensional array. The first subarray contains 
// the element and its siblings, the second contains the parent of the element 
// and its siblings, so on and so forth, all the way up to the "grandest" 
// parent. Assume that the grandest parent is the element with an `id` of `"1"`. 
// Use the following HTML and test cases to test your code:


// create array to hold results
// get element using argument id
// get all sibling elements

<!doctype html>
<html>

<head>
  <title>Tracing the DOM Tree</title>
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

// tries to pull all the siblings before navigating up one level 
// - can only move forward, does not account for starting at the last sibling
function domTreeTracer(id) {
  let results = [];
  let startingElement = document.getElementById(String(id));
  (function collectElements(start) {
    let currentElement = start;
    let siblings = [];
    while (currentElement) {
      console.log(currentElement);
      siblings.push(currentElement.nodeName);
      currentElement = currentElement.nextElementSibling;
    }
    results.push(siblings);
    if (startingElement.parentElement) {
      startingElement = startingElement.parentElement;
      if (startingElement.nodeName === 'BODY') {
        return;
      } else {
        collectElements(startingElement);
      }
    } 
  })(startingElement);
  return results;
}

// navigate up one level to the parent
// pull the collection of its children and iterate over them to get the nodeName
// add the nodeName to a collection then push that collection to the results 
function domTreeTracer(id) {
  let domTree = [];
  let parent = document.getElementById(String(id)).parentElement;
  (function collectElements(start) {
    let children = start.children;
    childrenNames = Array.from(children).map((child) => child.nodeName);  
    results.push(childrenNames);
    if (parent.parentElement) {
      parent = parent.parentElement;
      if (parent.nodeName === 'HTML') {
        return;
      } else {
        collectElements(parent);
      }
    }
  })(parent);
  return domTree;
}

> domTreeTracer(1);
= [["ARTICLE"]]
> domTreeTracer(2);
= [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
> domTreeTracer(22);
= [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]