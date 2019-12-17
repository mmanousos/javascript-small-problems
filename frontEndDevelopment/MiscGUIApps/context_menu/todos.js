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

  function showModal(id) {
    let todos = document.getElementById('todos-list');
    let items = Array.from(todos.getElementsByTagName('li'));
    let parent = items.filter(item => item.getAttribute('data-id') === id)[0];
    let hiddenDivs = Array.from(parent.getElementsByTagName('div'));
    hiddenDivs.forEach(div => div.classList.remove('hidden'));
  }

  function hideModal(modal, overlay) {
    [modal, overlay].forEach(div => div.classList.add('hidden'));
  }

  function removeTodo(id) {
    todo_items = todo_items.filter(todo => todo.id !== id);
  }

  function hideContextMenu() {
    let contextMenus = Array.from(document.querySelectorAll('.context-menu'));
    contextMenus.forEach(menu => menu.classList.add('hidden'));
  }

  function positionContextMenu(event) {
    let contextMenu = event.target.querySelector('.context-menu');
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.classList.remove('hidden');
  }

  // delegated event listener - has to account for all click functionality
  document.addEventListener('click', function(event) {
    event.preventDefault();
    let tagName = event.target.tagName;

    if (tagName === 'A') { // show modal
      let id = event.target.parentNode.getAttribute('data-id');
      showModal(id);
      hideContextMenu();
    } else if (tagName === 'BUTTON') { 
      let modal = event.target.parentElement.parentElement;
      let overlay = modal.nextElementSibling;
      
      if (event.target.textContent === 'Yes') { // remove todo
        let id = Number(modal.getAttribute('data-id'));
        removeTodo(id);
        renderTodos();
        hideContextMenu();
      }

      hideModal(modal, overlay);    
    } else if (tagName === 'DIV' && event.target.classList.contains('overlay')) {
      let modal = event.target.previousElementSibling;
      hideModal(modal, event.target);
    } else if (event.target.textContent === 'Delete Todo') {
      hideContextMenu();
      let id = event.target.parentNode.parentNode.getAttribute('data-id');
      showModal(id);
    } else {
      hideContextMenu();
    }
  });

  // context menu = right click on any of the todo items
  document.addEventListener('contextmenu', function(event) {
    hideContextMenu();

    if (event.target.tagName === 'LI') {
      event.preventDefault();
      positionContextMenu(event);
    }
  });

});