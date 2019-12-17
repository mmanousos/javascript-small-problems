// Bold Element + Custom
// Implement a function that makes an element bold and allows the user of the 
// function to optionally do something else with it.

// Problem
// In: element and optional second callback function
// Out: element that is bold and has callback function executed on it

// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8">
//     <title>Bold Element + Custom</title>
//   </head>
//   <body>
//    <section>Hello World</section>
//    <p>Greetings!</p>
//   </body>
// </html>

// > var sectionElement = document.querySelector('section');
// > makeBold(sectionElement, function(elem) {
//     elem.classList.add('highlight');
//   });
  
// > sectionElement.classList.contains('highlight');
// = true
// > sectionElement.style.fontWeight;
// = "bold"

function makeBold(element, callback){
  element.style.fontWeight = 'bold';
  // from Course Solution - check for callback and make sure it's a function
  // if (callback && typeof callback === 'function') {
  //   callback(element);
  // }
  callback(element);
}

// Further Exploration
// You can get the same behavior as the above solution by creating your own 
// custom event. For this further exploration exercise, create your own 
// CustomEvent called `bolded` that allows the user to add it as the type of 
// event to listen to. 
// Read about CustomEvent: 
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent

// Hint: You will still need a `makeBold` function. However, rather than having 
// it accept a callback as an argument, it instead dispatches the `bolded` 
// event.

// Course Solution - over my head at the moment
let sectionElement = document.querySelector('section');

function makeBold(element) {
  element.style.fontWeight = 'bold';
  var event = new CustomEvent('bolded');

  element.dispatchEvent(event);
}

sectionElement.addEventListener('bolded', function(event) {
  alert(event.target.tagName);
  event.target.classList.add('highlight');
})

makeBold(sectionElement);