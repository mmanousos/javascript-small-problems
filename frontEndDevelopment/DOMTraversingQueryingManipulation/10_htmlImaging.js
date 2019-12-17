// HTML Imaging
// Read the JavaScript code below. Given the code, create the HTML that matches 
// the DOM rendered by the browser. You don't need to account for the text nodes
//  when creating the HTML. The challenge of this exercise is trying to picture 
// what the HTML will be without running the code. At the very least, try 
// attempting it first with pen and paper. Assume that the following HTML is the
//  starting point:

// Starting HTML
<!doctype html>
<html>
  <head>
    <title>HTML Imaging</title>
  </head>
  <body>
  </body>
</html>

// JavaScript Code
var node1 = document.createElement('header');
// creates a header element
var node2 = document.createTextNode('Dynamic Content');
// creates a text node that reads 'Dynamic Content'

node1.innerHTML = '<p>Hello World!</p>';
// adds a p element to the header element
document.body.appendChild(node1);
// adds the header to the DOM
document.body.firstElementChild.insertBefore(node2, node1.firstElementChild);
// inserts 'Dynamic Content' text node into header element before the new p element

var node3 = document.createElement('h1');
// creates h1 element
node3.appendChild(node2);
// my guess = 
// adds h1 to the DOM as a child of the 'Dynamic Content' text node
// actually =
// makes node2 ('Dynamic Content') part of the H1 element as its child node!
document.body.firstElementChild.insertBefore(node3, node1.firstElementChild);
// moves new h1 from being a child of Dynamic Content text node to being a child of header

node1.setAttribute('id', 'header');
// creates id on header of 'header'
node3.classList.add('emphasis');
// adds class on h1 of 'emphasis'
node3.classList.add('light');
// adds class on h1 of 'light'

var node4 = document.createElement('style');
// creates element style
var css1 = ".emphasis { font-weight: bold; }";
var css2 = ".light { color: gray; }";
node4.type = 'text/css';
// sets attribute on style element of 'text/css'

node4.appendChild(document.createTextNode(css1));
// adds styling to style element
node4.appendChild(document.createTextNode(css2));
// adds styling to style element

document.head.appendChild(node4);
// adds styled style element to DOM