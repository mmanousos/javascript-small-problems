document.addEventListener('DOMContentLoaded', function() {
  let todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John' }
  ];

  // create HTML template
  let itemsTemplate = function sourceTemplate() {
    let templates = Array.from(document.getElementsByTagName('script'));
    let template = templates.filter(script => {
      if (script.getAttribute('type') === 'text/x-handlebars') {
        return script;
      }
    })[0];
    template.remove();
    return Handlebars.compile(template.innerHTML);
  }();

  function renderTodos() {
    let todos = itemsTemplate( { todos: todo_items } );
    document.querySelector('ul').innerHTML = todos;
  }
  renderTodos();

  function showModal(event) {
    let parent = event.target.parentNode;
    let hiddenDivs = parent.getElementsByClassName('hidden');
    Array.from(hiddenDivs).forEach(div => div.classList.remove('hidden'));
  }

  function hideModal(modal, overlay) {
    [modal, overlay].forEach(div => div.classList.add('hidden'));
  }

  function removeTodo(id) {
    todo_items = todo_items.filter(todo => todo.id !== id);
  }

  // delegated event listener - has to account for all click functionality
  document.addEventListener('click', function(event) {
    event.preventDefault();
    let tagName = event.target.tagName;

    if (tagName === 'A') { // show modal
      showModal(event);
    } else if (tagName === 'BUTTON') { 
      let modal = event.target.parentElement.parentElement;
      let overlay = modal.nextElementSibling;
      
      if (event.target.textContent === 'Yes') { // remove todo
        let id = Number(modal.getAttribute('data-id'));
        removeTodo(id);
        renderTodos();
      }

      hideModal(modal, overlay);    
    } else if (tagName === 'DIV' && event.target.classList.contains('overlay')) {
      let modal = event.target.previousElementSibling;
      hideModal(modal, event.target);
    }
  });

});