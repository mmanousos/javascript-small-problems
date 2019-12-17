// Counting Nodes
// Go over the two HTML snippets. How many nodes will the resulting DOM tree have?

// snippet 1
<div>
  <p>Then press the <em>Draw</em> button</p>
</div>

// snippet 2
<div><p>Then press the <em>Draw</em> button.</p></div>

// my answer
snippet 1 will have 7 nodes 

snippet 2 will have 6 nodes (one less because there's no empty text node between the div and the paragraph)

// corret answer
snippet 1 will have 11 nodes (the broswer adds HTML, HEAD and BODY nodes)
the div element has empty text nodes before and after it

snippet 2 will have 9 nodes (added HTML, HEAD and BODY nodes)
the div element does not have empty text nodes because it's not on a separate line