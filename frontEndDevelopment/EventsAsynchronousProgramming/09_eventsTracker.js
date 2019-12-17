document.addEventListener('DOMContentLoaded', function() {
  
  // my solution
  // tracker object basically matches Course Solution except theirs has an `add`
  // method to add events to the `events` array
  const tracker = {
    events: [],
    list: function() {
      return Array.from(this.events);
    },
    elements: function() {
      let list = this.list();
      return list.map((event) => event.target);
    },
    // add: function(event) {      // required for Course Solution
    //   this.events.push(event);
    // },
    clear: function() {
      this.events = [];
      return this.events.length;
    },
  };

  // my function does not match - requires all of the child listeners to contain
  // calls to event.stopPropagation();
  function track(callback) {
    return function(event) {
      tracker.events.push(event);
      callback(event);
    }
  }

  // Course Solution - not so dissimilar but adds additional function
  // - checks if the event is already tracked. if it isn't, adds it to the list 
  // of events
  // prevents the need to add additional event.stopPropagation() calls
  // also adds a property of `tracked: true` to the event 
  // function track(callback) {
  //   function isEventTracked(events, event) {
  //     return events.indexOf(event) !== -1;
  //   }

  //   return function(event) {
  //     if (!isEventTracked(tracker.list(), event)) {
  //       tracker.add(event);
  //       event.tracked = true;
  //     }

  //     callback(event);
  //   };
  // }

  let divRed = document.querySelector('#red');
  let divBlue = document.querySelector('#blue');
  let divOrange = document.querySelector('#orange');
  let divGreen = document.querySelector('#green');

  divRed.addEventListener('click', track(function (event) {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(function (event) {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(function (event) {
    // event.stopPropagation();
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(function (event) {
    // event.stopPropagation();
    document.body.style.background = 'green';
    console.log(tracker);
    console.log(tracker.list().length);
    console.log(tracker.elements());
    console.log(tracker.elements()[0] === document.querySelector('#blue'));
    console.log(tracker.elements()[3] === document.querySelector('#green'));
    console.log(tracker.clear());
    console.log(tracker.list());
    tracker.list()[0] = 'abc';
    console.log(tracker.list().length);
  }));
});