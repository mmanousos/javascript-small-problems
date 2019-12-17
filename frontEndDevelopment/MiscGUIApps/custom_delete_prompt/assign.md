A Custom Delete Confirmation Prompt
Create an application that displays a list of todos. When the user wants to delete a todo, the application should show a custom confirmation dialog.

Specifications
- Create a list of todos in the DOM from a JavaScript collection (array) of todos.
- Add a delete button for each todo.
- When the user clicks the delete button, a dialog appears asking the user to confirm the deletion.
- Use CSS to display the dialog.
  - The dialog has Yes and No buttons.
    - When the user clicks the Yes button, the dialog disappears, and the corresponding todo is deleted.
    - When the user clicks the No button, the dialog disappears, and the todo is not deleted.

You can start with a collection of your choice. Here's the collection used in our demo app:

todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

You can use the `id` property for each todo object to identify the todo item to remove from the DOM. Most applications use a `data-id` HTML attribute to identify DOM items.

demo app: https://dbdwvr6p7sskw.cloudfront.net/js-exercises/mini_projects/misc_gui_projects/03_todos_with_confirm/index.html


* delete confirmation
- create a deletion confirmation dialog
  div 
    containing form
  text "Are you sure you want to delete this todo?" 
  2 buttons: 'Yes' / 'No'

- when the delete link is clicked
  - reveal the deletion confirmation dialog using CSS 
  -- remove class 'hidden'
  - if 'yes' - delete corresponding 
    - get data-id of parent div.confirmation element
    - remove object from todos collection with corresponding id
  - if 'no' - hide overlay and confirmation
    - get the visible ones and add class 'hidden' to them

