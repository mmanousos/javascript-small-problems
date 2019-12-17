document.addEventListener('DOMContentLoaded', function() {
  var element1 = document.querySelector('table');
  var element2 = document.querySelector('main h1');
  var element3 = document.querySelector('main');

  var callback = function(event) {
    alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
  };

  // my solution - adds listener to all children as outlined in initial problem 
  // description but does not behave as described in scenarios
  // function delegateEvent(parentElement, selector, eventType, callback) {
  //   if (parentElement) {
  //     let elements = Array.from(parentElement.querySelectorAll(selector));
  //      elements.forEach((element) => {
  //       parentElement.addEventListener(eventType, callback);
  //      });
  //       return true;
  //     }
  //   }
  //   return undefined;
  // }

  // Course Solution
  function delegateEvent(parentElement, selector, eventType, callback) {
    if (parentElement && parentElement instanceof Element) {
      return !parentElement.addEventListener(eventType, function(event) {
        var validTargets = Array.prototype.slice.call(parentElement.querySelectorAll(selector)); 
        // for brevity, could be:
        // var validTargets = Array.from(parentElement.querySelectorAll(selector));
        if (validTargets.includes(event.target)) {
          callback(event);
        }
      });
    }
  }
// what I was missing is that I needed to add the event listener to the parent 
// element but only trigger the callback if the element clicked (event.target) 
// was one specified by the selector.
// I still would not have written it this way! 
// this syntax of returning an added event listener to an element preceded by a 
// bang is foreign to me

  // my attempted solution after reviewing other solutions
  function delegateEvent(parentElement, selector, eventType, callback) {
    if (parentElement && parentElement instanceof Element) {
      parentElement.addEventListener(eventType, function(event) {
        let elements = Array.from(parentElement.querySelectorAll(selector));
        if (elements.length > 0 && elements.includes(event.target)) {
          callback(event);
        }
      });
      return true;   
    }
    return undefined;
  }
// scenario 1
  // console.log(delegateEvent(element1, 'p', 'click', callback));
// scenario 2  
  // console.log(delegateEvent(element2, 'p', 'click', callback));
// scenario 3  
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
// scenario 4  
  // console.log(delegateEvent(element3, 'h1', 'click', callback));
// scenario 5  
  // console.log(delegateEvent(element3, 'aside p', 'click', callback));

// scenario 6  
  console.log(delegateEvent(element2, 'p', 'click', callback));
  var newP = document.createElement('P');
  var newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);
});

  // if the delegation takes place, return true
  // else return undefined
