// Nodes to Array
// Implement a function that converts the DOM, starting from the body, to nested
//  arrays. Each element in the DOM is represented as 
// ["PARENT_TAG_NAME", [children]] where children are elements as well and as 
// such follow the same format. When an element has no children, it's 
// represented as ["PARENT_TAG_NAME", []]. For instance, if the HTML doesn't 
// have any elements inside the body, the result array would be: 
// ["BODY", []]. Likewise, if the HTML only has a `div` element as its content, 
// the result array would be: ["BODY", [["DIV", []]]].

// Go over the examples below to better visualize how the DOM is represented as 
// nested arrays.

// Problem
// In: html  
// Out: nested array representing the DOM of the provided HTML starting at 'BODY'

// Rules: 
// If element has no children, they should be represented as an empty array. 
// Notes: 
// likely need to use a recursive function 

// Approach Brainstorming: 
// get the document.body element and add it to an array
// iterate over the array, replacing 
// get the nodeName of the element and the array of its children
// replace the element with an array of [nodeName, [children]]
// repeat with array of children

// use walk function
// callback should build the nested array 

// first attempt
// function walk(node, callback) {
//   callback(node);                                         // do something with node
//   for (let i = 0; i < node.childNodes.length; i += 1) {   // for each child node
//     walk(node.childNodes[i], callback);                    // recursively call walk()
//   }
// }

// function nodesToArr() {
//   let nestedDOM = [document.body];
//   return nestedDOM.map((node) => {
//     return walk(node, function(node) {
//       let name = node.nodeName;
//       let children = node.children;
//       console.log(name);
//       console.log(children);
//       if (children) {
//         return [name, Array.from(children)];
//       }
//     });
//   });
// }

// From Course Hint - Mental Model
// let nestedDOM = [document.body];
// if (nestedDOM[0].children.length > 0) {
//   nestedDOM[0] = [nestedDOM[0].nodeName, Array.from(nestedDOM[0].children)];
// } else {
//   nestedDOM[0] = [nestedDOM[0].nodeName, []];
// }


// Working solution
function mapNameChildren(elementArray) {
 return elementArray.map((element) => {
    let children = Array.from(element.children);
    let newArray;
    if (children) {
      newArray = [element.nodeName, mapNameChildren(children)];
      return newArray;
    }
  })
}

function nodesToArr() {
  let nestedDOM = [document.body];
  return mapNameChildren(nestedDOM);
}


// example1
<!doctype html>
<html>
  <head>
    <title>Nodes to Array</title>
  </head>
  <body>
    <header id="1"></header>
    <main id="2"></main>
    <footer id="3"></footer>
  </body>
</html>

// example1-output
> nodesToArr();
= ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// OR

= ["BODY", [
    ["HEADER", []],
    ["MAIN", []],
    ["FOOTER", []]]]

// example2
<!doctype html>
<html>
  <head>
    <title>Nodes to Array</title>
  </head>
  <body>
    <header id="1"></header>
    <main id="2">
      <div></div>
      <div></div>
    </main>
    <footer id="3"></footer>
  </body>
</html>

// example2-output
> nodesToArr();
= ["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]]

// OR

= ["BODY", [
    ["HEADER", []],
    ["MAIN", [
      ["DIV", []],
      ["DIV", []]]],
    ["FOOTER",[]]]]

// example3
<!doctype html>
<html>
  <head>
    <title>Nodes to Array</title>
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

// example3-output
> nodesToArr();
= ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]

// OR

= ["BODY", [
    ["DIV", [
      ["DIV", []],
      ["DIV", [
        ["DIV",[]]]]]],
    ["DIV", []],
    ["DIV", [
      ["DIV", []],
      ["DIV", []],
      ["DIV", []]]]]]