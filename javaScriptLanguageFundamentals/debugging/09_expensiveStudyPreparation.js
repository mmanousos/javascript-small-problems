// Expensive Study Preparation
// We make a few purchases to prepare for our study session, but the amount
// charged upon checkout seems too high. Run the following code and find out why
// we are charged incorrectly.

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
var shoppingCart = [];

// Currently available products with prices.
var prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price(item) {
  return prices[item.name];                                       // where is name defined?
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) {
  amount = amount || 1;

  var i;
  var item;
  var alreadyInCart = false;

  for (i = 0; i < shoppingCart.length; i += 1) {
    item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name: name, amount: amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  var total = 0;
  var i;

  for (i = 0; i < shoppingCart.length; i += 1) {
    var item = shoppingCart[i];

    total += (item.amount * price(item));
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log('You have been charged $' + total() + '.');
}

function checkout() {
  pay();
  shoppingCart = {};
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0);

checkout();
// You have been charged $14.69.


// seems to be charging for one pencil even though we tried to reset the
// quantity of pencils.
// since the default number is 1, even though we reset the number of pencils, it
// is subsequently set to 1 because `0` evaluates to `falsy` in JavaScript.
// to correct this, we want to change that evaulation on line 26.
// instead use `if (amount === undefined) amount = 1;` to explictly verify that
// `amount` is only set to `1` if it is not included as an argument.
