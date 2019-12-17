// 5. Context Menus
// Given the following markup, implement distinct context menus for the main and
//  the sub areas of the web page. You can represent a context menu as an alert 
// box that displays the name of the respective area (i.e., alert("sub")). 
// Only one context menu should appear when the event occurs.

// Context Menus: https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event

// Problem
// when an element is right-clicked, trigger an alert that displays the name of that area only 
// - it should not trigger multipe alerts for nested elements

// Notes: 
// use either `stopPropagation` or `onCapture`: `true` to prevent multiple alerts
// may also need to use `preventDefault`
// need to figure out how to access click of right mouse button - oncontextmenu



<main>
  Main Area
  <section id="sub">
    Sub Area
  </section>
</main>


main, #sub {
  padding: 15px;
}

main {
  width: 100 %;
  height: 200px;
  background: blue;
  color: white;
}

#sub {
  position: relative;
  top: 100px;
  left: 15px;
  background: red;
  height: 50px;
  width: 50 %;
}


// only works for `sub` section
let sub = document.querySelector('#sub');
sub.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  alert(this.name);
});

// alternate syntax
sub.oncontextmenu = function() {
  event.preventDefault();
  alert(this.name);
}

// works
document.addEventListener('DOMContentLoaded', function () {
  let sub = document.querySelector('#sub');
  let main = document.querySelector('main');

  sub.oncontextmenu = function () {
    event.preventDefault();
    event.stopPropagation();
    alert('Sub');
  };

  main.oncontextmenu = function () {
    event.preventDefault();
    alert('Main');
  };
});


// using event delegation - Xullnn's solution
var main = document.querySelector('main');

main.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  alert(event.target.tagName);
});