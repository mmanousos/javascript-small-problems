document.addEventListener('DOMContentLoaded', function() {
  let highlighted = [];
  let main = document.querySelector('main');
  let ul = document.querySelector('ul');

  function removeHighlight(highlighted) {
    highlighted.forEach((element) => element.classList.remove('highlight'));
    highlighted = [];
  }

  ul.addEventListener('click', function(event) {
    removeHighlight(highlighted);
    let articleNumber = event.target.innerText;
    articleNumber = articleNumber.slice(articleNumber.length - 1);
    let article = document.querySelector(`#article-${articleNumber}`);
    article.classList.add('highlight');
    highlighted.push(article);
  });

  main.addEventListener('click', function(event) {
    removeHighlight(highlighted);
    let element;
    let targetName = event.target.tagName;
    if (targetName === 'MAIN' || targetName === 'H1') {
      element = main;
    } else if (targetName === 'ARTICLE') {
      element = event.target;
    } else {
      element = event.target.parentElement;
    }
    element.classList.add('highlight');
    highlighted.push(element);
  });
});