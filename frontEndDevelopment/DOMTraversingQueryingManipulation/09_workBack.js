// Work Back
// Given the JavaScript code below, create the corresponding HTML that results 
// to the same logs to the console when executed in sequence.

> console.log(document.head.childNodes.length); 
= 3 // 3 child nodes 
> console.log(document.head.children[0].tagName);
= 'TITLE' // because the title exists, so empty nodes are on either side of it?
// but that wouldn't place it at index position 0 of the children of head
> console.log(document.head.textContent);
= "
      Title
    "
> console.log(document.body.children.length);
= 3 // body has three child elements
> console.log(document.body.childNodes.length);
= 5 // body has 5 child nodes (so probably some empty text nodes but not one between header and footer)
> console.log(document.querySelector('div').parentNode.parentNode.tagName);
= 'BODY' // there is a div and it's nested 2 layers deep from body - nest in `main`
> console.log(document.querySelector('div section').children[2].nextElementSibling);
= null  // I believe this is telling me there are 3 child elements of section, 
        // which is itself a child of div
> console.log(document.querySelectorAll('div').length);
= 1     // only one div in the document

> var nodeA = document.body.firstElementChild;
> console.log(document.querySelector('footer').children.length);
= 1 // there is a footer and it has one child
> console.log(document.querySelector('body').replaceChild(
   document.querySelector('footer'), document.body.firstElementChild).tagName);
= 'HEADER'
> console.log(document.body.appendChild(nodeA)); // first element of body is header
= <header>Header<header>


> console.log(document.querySelector('section').textContent.split("\n").map(function(text) {
   return text.trim();
 }).filter(function(text) { 
   return text.length > 0;
 }));
= ["H1", "Hello", "World"]
{/* the text of this section is 3 entries that read 'H1' 'Hello' 'World' */}

> console.log(document.querySelector('section').children);
= HTMLCollection(3) [h1, p, p]
{/* children of section are an h1 element and 2 p elements */}
> console.log(document.querySelector('section').textContent);
= "
            H1
            Hello
            World
          "
{/* the text of those elements are 'H1 Hello World' respectively */}

> console.log(document.querySelector('span.emphasis').parentNode.tagName);
= 'FOOTER'
{/* the footer has a child element that is a span with a class of emphasis */}