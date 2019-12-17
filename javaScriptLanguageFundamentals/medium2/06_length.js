// Length
// Read through the code below. What values will be logged to the console?
// Can you explain these results?

var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);         // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length);  // 3

languages.length = 4;
console.log(languages);         // ['JavaScript', 'Ruby', 'Python', ,]  - an empty element is added to the array to expand its length
console.log(languages.length);  // 4

languages.length = 1;
console.log(languages);         // ['JavaScript'] - the elements beyond the newly declared length are discarded
console.log(languages.length);  // 1

languages.length = 3;
console.log(languages);         // ['JavaScript', , ,] - two empty elements are added to the array
console.log(languages.length);  // 3

languages.length = 1;           // the empty elements are discarded
languages[2] = 'Python';
console.log(languages);         // ['JavaScript', , 'Python'] - the string 'Python' is assigned to the index 2 which requires an empty element insertion at index 1
console.log(languages[1]);      // undefined - the empty element is `undefined`
console.log(languages.length);  // 3

// Since arrays are objects, they are mutable. We can reassign the values at various indexes.
// We can also alter their length using the length property.
// Making the length longer inserts empty elements. Making the length shorter discards elements beyond that count.
