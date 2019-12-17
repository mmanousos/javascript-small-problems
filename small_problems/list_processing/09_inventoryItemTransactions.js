// Inventory Item Transactions
// Write a function that takes two arguments, inventoryItem and transactions, 
// and returns an array containing only the transactions for the specified 
// inventoryItem.

//   Example

// var transactions = [{ id: 101, movement: 'in', quantity: 5 },
//   { id: 105, movement: 'in', quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in', quantity: 12 },
//   { id: 103, movement: 'out', quantity: 15 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in', quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in', quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 },];

// transactionsFor(101, transactions);
// // returns
// [{ id: 101, movement: "in", quantity: 5 },
// { id: 101, movement: "in", quantity: 12 },
// { id: 101, movement: "out", quantity: 18 },]

// Problem
// In: inventoryItem (id number) and array of transaction objects
// Out: array of all transactions objects for that id

// Assumptions: 
// - transactions array is not empty
// - id exists within transactions array

// Approach Brainstorming:
// filter all objects for just those with id

// Data Structure
// array of objects

const transactionsFor = function filterTransactionsById(number, transactions) {
  return transactions.filter((trans) => trans.id === number);
}

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

console.log(transactionsFor(101, transactions));
// returns
// [{ id: 101, movement: "in", quantity: 5 },
// { id: 101, movement: "in", quantity: 12 },
// { id: 101, movement: "out", quantity: 18 },]