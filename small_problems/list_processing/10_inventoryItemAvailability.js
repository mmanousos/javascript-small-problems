// Inventory Item Availability
// Building on the previous exercise, write a function that returns true or 
// false based on whether or not an inventory item is available. As before, the 
// function takes two arguments: an inventory item and a list of transactions. 
// The function should return true only if the sum of the quantity values of the 
// item's transactions is greater than zero. Notice that there is a movement 
// property in each transaction object. A movement value of 'out' will decrease 
// the item's quantity.

// You may (and should) use the transactionsFor function from the previous 
// exercise.

//   Examples:

// var transactions = [{ id: 101, movement: 'in', quantity: 5 },
// { id: 105, movement: 'in', quantity: 10 },
// { id: 102, movement: 'out', quantity: 17 },
// { id: 101, movement: 'in', quantity: 12 },
// { id: 103, movement: 'out', quantity: 15 },
// { id: 102, movement: 'out', quantity: 15 },
// { id: 105, movement: 'in', quantity: 25 },
// { id: 101, movement: 'out', quantity: 18 },
// { id: 102, movement: 'in', quantity: 22 },
// { id: 103, movement: 'out', quantity: 15 },];

// isItemAvailable(101, transactions);     // false
// isItemAvailable(105, transactions);     // true

// Problem
// In: item id value, array of transaction objects
// Out: boolean representing whether the item is currently in stock

// Rules:
// Notes:
// Assumptions:

// Approach Brainstorming:
// use inventoryItemTransactions to get an array of just transactions for that item

// iterate through each object of the array
// reduce
// if movement === 'in' += quantity
// else movement === 'out' -= quantity

// Data Structure
// array of objects

// Algorithm
// BEGIN 
//   trans = array of transaction objects
//   total = trans.reduce((itemTotal, transaction) => {
//     if transaction.movement === 'in' 
//       itemTotal += transaction.quantity
//     else 
//       itemTotal -= transaction.quantity
//   return total > 0;      
//   })
// END

const transactionsFor = function filterTransactionsById(number, transactions) {
  return transactions.filter((trans) => trans.id === number);
}

const totalQuantity = function tallyItems(itemTransactions) {
  return itemTransactions.reduce((itemTotal, transaction) => {
    if (transaction.movement === 'in') {
      return itemTotal += transaction.quantity;
    } else {
      return itemTotal -= transaction.quantity;
    };  
  }, 0);
};

const isItemAvailable = function tallyQuantity(number, transactions) {
  return totalQuantity(transactionsFor(number, transactions)) > 0;
};

var transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 15 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true