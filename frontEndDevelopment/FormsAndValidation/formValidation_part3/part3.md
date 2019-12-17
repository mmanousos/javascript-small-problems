Automatic Tab Forwarding
In the previous exercise, we added a Credit Card field to the sign-up form. The field uses four separate inputs, with room for 4 digits per input. To enter a credit card number, the user must change focus from one input to the next by pressing the Tab key or clicking the mouse. A nice touch for this application would have the focus change automatically as the user enters the 4th digit in each input.

Specifications
Validate the credit card inputs to enforce precisely 4 digits in each input.
Attach an event handler to the first three credit card inputs to automatically change the focus to the next input when the user enters the 4th digit. The last input doesn't need an event handler.

demo: https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/forms/03_tab_forwarding/index.html

if one of the CC fields has 4 characters, jump to the next field
find next element, use focus() method to shift focus to that element 

Further Exploration
Most browsers let users tab backward through a form's inputs with the `Shift+Tab` key. When you attach event handlers to those inputs, you lose the `Shift+Tab` functionality. Well-designed user interfaces should use event handlers that detect the Shift+Tab keystroke and move the focus back to the previous input field. See if you can implement this feature.

See [this assignment](https://launchschool.com/lessons/8c4d93c8/assignments/2d21ae5b) for information on the event object. Pay particular attention to the keyboard events section. You may also want to read [this discussion of modifier keys](https://launchschool.com/posts/21695881).