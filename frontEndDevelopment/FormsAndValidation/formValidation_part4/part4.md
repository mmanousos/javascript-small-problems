Serializing Forms
Any data collected from a form will probably get sent to the server. The browser does this automatically using the action attribute and the submit button. With AJAX, we bypass the browser's default behavior and send the data programmatically with the XMLHttpRequest object. For the data to make sense to the server, it must have a format that the server recognizes and understands. In this exercise, you will serialize the sign-up form data into a valid POST request body that is compatible with a content-type of application/x-www-form-urlencoded.

Specifications
Prevent the default action on the Submit button.
Add a block element to the bottom of the page with a heading of "Serialized Form". You will render the form data in this block.
When the user clicks the Submit button, and the data is valid, extract the form data from all fields in the form. Use the data to construct a string of key/value pairs separated by &, e.g., first_name=David&last_name=Shepherd&email=davids%40example.com.
Make sure each name/value pair is URL-encoded. For instance, in the example above, the email address uses %40 instead of @.
Concatenate the 4 credit card inputs into a single value before adding it to the request body string.
Render the form data as text in the block element you created earlier.