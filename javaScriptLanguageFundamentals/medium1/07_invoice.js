// Invoice
// The invoiceTotal function in the code below computes the total amount for an
// invoice containing four "line items". How can you refactor the function so
// that it will work with invoices containing any number of line items?

// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }
//
// invoiceTotal(20, 30, 40, 50);          // works as expected
// invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// use the arguments object
// iterate over the arguments object adding all of them until there are no more


// ES5 version of arguments object
function invoiceTotal() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    sum += Number(arguments[i]);
  }

  return sum;
}

//ES6 version of arguments object using rest parameters syntax
function invoiceTotal(...args) {
  let sum = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    sum += Number(arguments[i]);
  }

  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));
