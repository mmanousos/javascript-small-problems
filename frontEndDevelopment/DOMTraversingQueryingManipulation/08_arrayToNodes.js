// Array to Nodes
// Implement a function that converts a nested array of nodeNames 
// (see Nodes to Array exercise for examples) to nodes. 
// Go over the sample code and the corresponing return values below as a guide 
// for what you will implement.

// start with creating a document
// set parent = 'document'
// iterate through array
// array element is an element name  -> if array element type === 'string' 
  // create a new node               ->  node = document.createElement(elementName)
  // append the new node to parent   ->  parent.appendChild(node)
// if array element is an array      -> else 
 // iterate through array

function addNode(arr, parent, element) {
  arr.forEach((node) => {
    if (typeof node === 'string') {
      element = document.createElement(node);
      parent.appendChild(element);
      parent = element;
    } else if (Array.isArray(node)) {
      if (node.length === 0) return;
      if (element) parent = element;
      addNode(node, parent, element);
    }
  });  
}

function arrayToNodes(array) {
  let parent = document.body; 
  let element;
  addNode(array.slice(1), parent, element);
}

var nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
var nodes = ["BODY", [["DIV", [["DIV", []], ["DIV", [["DIV", []]]]]], ["DIV", []], ["DIV", [["DIV", []], ["DIV", []], ["DIV", []]]]]];

// OR
//
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]

// My Working Solution
function arrayToNodes(array) {
  let parent = document.body;
  let element;

  arr = array.slice(1);
  (function buildNodes(array) {
    array.forEach((node) => {  
      if (typeof node === 'string') {
        element = document.createElement(node);
        parent.appendChild(element);
      } else {
        if (node.length === 0) return;
        buildNodes(node);
      }
    }); 
  })(arr);
}  

// Course Solution
function arrayToNodes(nodes) {
  var parent = document.createElement(nodes[0]);
  var children = nodes[1];
  var i;

  if (children.length === 0) {
    return parent;
  } else {
    for (i = 0; i < children.length; i += 1) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }

  return parent;
}

// Pete Hansen's solution - I appreciate his use of the ES6 syntax for variable 
// assignment and use of `map` and `forEach`
const arrayToNodes = function(nodes) {
  const [parent, children] = nodes;
  const subTree = document.createElement(parent);
  children.map((node) => arrayToNodes(node))
          .forEach((branch) => subTree.appendChild(branch));
  return subTree;
}

  // array.forEach((node) => {
  //   if (typeof node === 'string') {
  //     element = parent.createElement(node);
  //     parent.appendChild(element);
  //   } else {
  //     if (node.length === 0) return;
  //     // check if it's a string or array again 
  //     node.forEach((el) => {
  //       parent = element;
  //       element = parent.createElement(el);
  //       parent.appendChild(element);
  //     });
  //   }
  // });
// }

// example1
// Nested array of nodes
var nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

arrayToNodes(nodes);

// example1-return-value
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>

// example2
// Nested array of nodes
var nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

// OR
//
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]

arrayToNodes(nodes);

// example2-return-value
<body>
  <div>
    <div></div>
    <div>
      <div></div>
    </div>
  </div>
  <div></div>
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</body>