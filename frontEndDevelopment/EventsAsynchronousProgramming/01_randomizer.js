// Randomizer
// Write a `randomizer` function that accepts `n` callbacks and calls each 
// callback at some random point in time between now and `2 * n` seconds from 
// now. For instance, if the caller provides 5 callbacks, the function should 
// run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 
// 1, 2, 3, ..., 2 * n.

// Problem
// In: some number `n` of callback functions
// Out: 
// output of elapsed time 
// output of each of the callback functions at some random time within a timeframe that is n * 2 seconds

// Assumptions: n is between 1-3 for our purposes

// Approach Brainstorming: 
// get length of arguments
// set time as length * 2
// set timer = 0
// use setInterval to log timer every 1 second 
// function to calculate randomTime => Math.floor(Math.random * time) * 1000 to generate seconds
// iterate over arguments, setTimeout for each one with a randomTime between 0 - n *2
// cancelInterval after when timer === time

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(callbacks) {
  let time = arguments.length * 2;
  let timer = 0;
  let callbacks = [].slice.call(arguments);
  let displayTimer = setInterval(function() {
    timer += 1;
    if (timer > time) {
      clearInterval(displayTimer);
      return; 
    }
    console.log(timer);
  }, 1000);
  let randomTime = function() {
    return (Math.floor(Math.random() * time)) * 1000;
  }
  callbacks.forEach((callback) => setTimeout(callback, randomTime()));  
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6

// Expect the output to change with each run due to the random execution times.

