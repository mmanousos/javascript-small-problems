Events Tracker
Implement a function that tracks events on a web page by wrapping a callback function in a function that adds each event to a tracker object before invoking the callback. In other words, your function should take a callback function as an argument and return a new function that:

Records the event.
Executes the original callback function.
Use the following markup and sample scenario to ascertain the expected behavior of the tracker object.

<html>
  <head>
    <title>Tests</title>
    <meta charset="utf-8">
    <style>
     #red, #blue, #green, #orange {
         cursor: pointer;
         color: white;
         padding: 10px;
         margin: 10px;
     }
     #red {
         width: 400px;
         height: 400px;
         background: red;
     }

     #blue {
         width: 200px;
         height: 200px;
         background: blue;
     }

     #orange {
         width: 100px;
         height: 100px;
         background: orange;
     }

     #green {
         width: 50px;
         height: 50px;
         background: green;
     }
    </style>
  </head>
  <body>
    <div id="red">Red
      <div id="blue">Blue</div>
      <div id="orange">Orange
        <div id="green">Green</div>
      </div>
    </div>
    <script src="test.js"></script>
  </body>
</html>

Scenario
Assumptions

Assume that the user clicks the elements in the following order: div#blue, div#red, div#orange, and div#green.
Use the "click" event listeners for the four elements:
divRed.addEventListener('click', track(function(event) {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(function(event) {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(function(event) {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(function(event) {
  document.body.style.background = 'green';
}));

> tracker.list().length
= 4
> tracker.elements()
= [div#blue, div#red, div#orange, div#green]
> tracker.elements()[0] === document.querySelector('#blue')
= true
> tracker.elements()[3] === document.querySelector('#green')
= true
> tracker.clear()
= 0
> tracker.list()
= []
> tracker.list()[0] = 'abc'
> tracker.list().length
= 0

`tracker` object has: 
an array to track the events
`list` method that returns an array of the events called in order
  - this is a copy of the events / elements, not direct references to the events
`elements` method that returns the target of each event
`clear` method that empties the tracking array and returns the length of the empty array