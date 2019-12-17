// String Assignment
// Take a look at the following code:

// var name = 'Bob';
// var saveName = name;
// name = 'Alice';
// console.log(name, saveName);

// What does this code log to the console? Think about it for a moment before
// continuing.

// If you said that this code logged:

// Alice Bob

// you would be 100% correct, and the answer should come as no surprise. Now let's
// look at something slightly different:

// var name = 'Bob';
// var saveName = name;
// name.toUpperCase();
// console.log(name, saveName);
// What does this code log? Can you explain these results?

`Bob Bob`
because the toUpperCase method is not destructive. it creates a new
uppercase string but that string is not assigned to the variable `name`.

// Course Solution
because a string is immutable

// Further Exploration
// If you take another look at the code, you'll notice that on line 3, the
// string referenced by the name variable calls the String.prototype.toUpperCase
// method. How is it possible that even though this string is a primitive, it's
// still able to call a method?

https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
