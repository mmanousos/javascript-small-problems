// Buggy Code
// The code below is buggy. The person who created the code expects that nothing
//  will happen when the user clicks on the image. This, however, isn't the 
// case; clicking the image still brings the user to another web page.

// Study the code and explain the bug.

<a href="https://www.launchschool.com">
  Home
  <img src="https://d24f1whwu8r3u4.cloudfront.net/assets/launch-logo-b6d01bd15ee9da31457ee3c315845718823aa8a741858be598ab35042a312348.svg" />
</a>

img {
  display: block;
  width: 15 %;
  margin - top: 10px;
  cursor: auto;
}

document.querySelector('img').addEventListener('click', function (event) {
  event.stopPropagation();
}, false);

// they need to use preventDefault instead of stopPropagation.
// stopPropagation impacts the execution of handlers, not the default behavior
// of the element.