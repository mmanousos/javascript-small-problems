The intention of the program below is to output a paragraph. Copy and paste the
program into a JavaScript console (e.g., from the Chrome Developer Tools), then
run it. Is the output what you expected? Are there any bugs/errors?

var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

As written in the exercise, there are several spaces following the \ character
on line 9 which prevents the string from being assigned to the `paragraph` variable.

Removing those spaces, there are additional spaces at the start of lines 6-10
that cause the text to be spaced incorrectly. Correct by using string concatenation or inserting newline characters where they are needed.
