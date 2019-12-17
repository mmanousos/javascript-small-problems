// Buggy Code 2
// A grocery store uses a JavaScript function to calculate discounts on various 
// items. They are testing out various percentage discounts but are getting 
// unexpected results. Go over the code, and identify the reason why they aren't 
//  getting the expected discounted prices from the function. Then, modify the 
// code so that it produces the correct results.

var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    var discount = this.price * percent / 100;
    this.price -= discount;

    return this.price;
  },
};

console.log(item.discount(20));   // should return 40
// 40
console.log(item.discount(50));   // should return 25
// 20
console.log(item.discount(25));   // should return 37.5
// 15

// as written, the code reassigns the item's price each time a discount is 
// provided. So subsequent discounts are taken on the already discounted price.
// 50 - 20% => 40 - 50% => 25 - 25% => 15

// instead, we should create a local variable within the discount function to 
// reflect the discount given without altering the full retail price.

var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function (percent) {
    var discount = this.price * percent / 100;
    let discountPrice = this.price;

    discountPrice -= discount;

    return discountPrice;
  },
};

// Course Solution
// simply don't reassign the price
// discount: function (percent) {
//   var discount = this.price * percent / 100;
//   return this.price - discount;
// },

