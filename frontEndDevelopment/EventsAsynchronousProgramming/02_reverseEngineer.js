// Reverse Engineer
// Without changing the behavior of the following code, remove the call to 
// `event.stopPropagation` and refactor the result.

document.querySelector('html').addEventListener('click', function() {
  document.querySelector('#container').style = 'display: none';
});
// this function sets the behavior so that any click on the HTML document will 
// remove the visibility of the container 

document.querySelector('#container').addEventListener('click', function(event) {
  event.stopPropagation();
});
// this call to `stopPropagation` prevents the functionality of the above code 
// if the container element is the one clicked on because once the `click` event
// gets to the container element, it stops, so the bubbling phase never 
// takes place, so the html `click` handler is never triggered and the element 
// remains visible

// instead we replace it with this code that looks for the document `click` on 
// the way down (capture phase) instead of the way up (bubble phase)
// and add a statement that the container should be visible if it is clicked on
document.querySelector('html').addEventListener('click', function () {
  document.querySelector('#container').style = 'display: none';
}, true);

document.querySelector('#container').addEventListener('click', function (event) {
  document.querySelector('#container').style = 'display: visible';
});

// Course Solution
// merges them into one listener with a conditional that only sets the container
//  to `display: none` if the element clicked is not the container
document.querySelector('html').addEventListener('click', function (event) {
  var container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});