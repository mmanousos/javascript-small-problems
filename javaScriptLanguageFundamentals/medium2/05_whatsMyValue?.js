// What's My Value?
// What will the following program log to the console? Can you explain why?

var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);                // 3
console.log(Object.keys(array).length);   // 4

array[-2] = 'Watermelon';
console.log(array.length);                // 3
console.log(Object.keys(array).length);   // 5

// only indexed items in an array are included in the count of Array.length
// only 0 and positive integers can serve as index values in an array
// any values assigned using bracket notation that are not 0 or positive integer are stored as property keys instead
