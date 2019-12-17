// Mini Inventory Management System
// In this exercise, you'll build a simple inventory management system. The 
// system is composed of an item creator, an items manager, and a reports 
// manager. The item creator makes sure that all necessary information is 
// present and valid. The item manager is responsible for creating items, 
// updating information about items, deleting items, and querying information 
// about the items. Finally, the report manager generates reports for a specific
//  item or ALL items. Reports for specific items are generated from report 
// objects created from the report manager. The report manager is responsible 
// for reports for all items.

// Component Specifications

// Here's all the required information for an item:
// SKU code: This is the unique identifier for a product. It consists of the 
  // first 3 letters of the item and the first 2 letters of the category. If the
  //  item name consists of two words and the first word consists of two letters
  //  only, the next letter is taken from the next word.
// Item name: This is the name of the item. It must consist of a minimum of 5 
  // characters. Spaces are not counted as characters.
// Category: This is the category that the item belongs to. It must consist of a
  //  minimum of 5 characters and be only one word.
// Quantity: This is the quantity in stock of an item. This must not be blank. 
  // You may assume that a valid number will be provided.

// The following are the methods that the items manager can perform:
// create: This method creates a new item. Returns false if creation is not 
  // successful.
// update: This method accepts an SKU Code and an object as an argument and 
  // updates any of the information on an item. You may assume valid values will 
  // be provided.
// delete: This method accepts an SKU Code and deletes the item from the list.
  //You may assume a valid SKU code is provided.
// items: This property returns all the items.
// inStock: This method list all the items that have a quantity greater than 0.
// itemsInCategory: This method list all the items for a given category

// The following are the methods on the reports managers:
// init: This method accepts the ItemManager object as an argument and assigns 
  // it to the items property.
// createReporter: This method accepts an SKU code as an argument and returns an
  //  object. The returned object has one method, `itemInfo`. It logs to the 
  // console all the properties of an object as "key:value" pairs(one pair per 
  // line).There are no other properties or methods on the returned object 
  // (except for properties / methods inherited from `Object.prototype`).
// reportInStock: Logs to the console the item names of all the items that are 
  // in stock as a comma separated values.

// Notes:
// There's no need to add the ability to validate the uniqueness of the SKU 
// code. Given the current description, it's possible that a duplicate will 
// exist.
// Each required piece of information for an item corresponds to one property.
// If any of the required information provided is not valid, the item creator 
// returns an object with a `notValid` property with a value of `true`.
// The created item objects should not have any methods / properties on them 
// other than the required information above and those inherited from 
// `Object.prototype`.
// You may add methods to the item manager as you deem necessary.

// Problem

// Item Creator (verifies information for items)
// In: SKU, Item Name, Category, Quantity
// Out: Item object

// Rules: 
// SKU = first 3 letters of item and first 2 letters of category
//   if item name is 2 words and first word is only 2 letters, pull the third letter from the next word
// Item name = minimum of 5 characters, not including spaces
// Category = minimum of 5 characters, only one word (no spaces allowed)
// Quantity = must not be blank

// Item Manager (crud portion of the application)
// create - creates a new item. returns false if unsuccessful
// update - accepts a SKU and an object and updates any of the values on the object (assume the values are valid)
// delete - accepts a SKU and deletes the item from the list. (assume valid SKU)
// items - returns all items 
// inStock - lists all items with quantity greater than 0
// itemsInCategory - lists all items for given category 

// Reports Manager (reports on items)
// init - in: `ItemManager` object  out: `ItemsManager` set to `items` property
// createReporter - in: SKU; out: object with single method `itemInfo` that logs all of the properties of an object as key:value pairs
// reportInStock - in: n/a; out: logs names of all in-stock items as comma separated values 

// Notes: 
// - SKU don't need to be unique (there may be duplicates based on these specs)
// - if any property of an object that is being accepted for creation is invalid, a new object is returned with a `notValid` property set to `true`
// - items should not have any methods or properties besides what is listed 
// - Item Manager can have additional methods as necessary

// Approach Brainstorming: 

// Item objects have properties outlined 
// Item creator has methods to check if object arguments are valid 

// Item manager has methods to create, update, delete, access 
//   stores created items
// Reports manager 
//   takes item manager object as an argument 
//   has methods to get info from item manager

let ItemCreator = (function (){
  function isValidItemName(itemName) {
    let name = itemName.replace(' ', '');
    return (name.length >= 5);
  };
  function isValidCategory(category) {
    return (category.length >= 5 && !(/[ ]/.test(category)));
  };
  function isValidQuantity(quantity) {
    return (quantity !== undefined && quantity >= 0);
  };
  function generateSKU(itemName, category) {
    let name = itemName.replace(' ', '');
    let sku = name.slice(0, 3) + category.slice(0, 2);
    return sku.toUpperCase();
  };

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) &&
      isValidCategory(category) &&
      isValidQuantity(quantity)) {
      this.sku = generateSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  itemsList: [],
  selectItem: function(sku) {
    let selectedItem = this.itemsList.filter((item) => {
      if (item.sku === sku) return item;
    });
    return selectedItem[0];
  },
  create: function(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.itemsList.push(item);
    }
  },
  update: function(sku, obj) {
    sku = sku.toUpperCase();
    let currentItem = this.selectItem(sku);
    let newKeys = Object.keys(obj);
    newKeys.forEach((key) => {
      if (currentItem[key] !== obj[key]) {
        currentItem[key] = obj[key];
      }
    });
  },
  delete: function(sku) {
    sku = sku.toUpperCase();
    let index = this.itemsList.indexOf(this.selectItem(sku));
    this.itemsList.splice(index, 1);
  },
  items: function() {
    return this.itemsList;
  },
  inStock: function() {
    return this.itemsList.filter((item) => item.quantity > 0);
  },
  itemsInCategory: function(category) {
    return this.itemsList.filter((item) => item.category === category);
  }
};

let ReportManager = {
  init: function(itemManagerObj) {
    this.itemManager = itemManagerObj;
  },
  createReporter: function(sku) {
    sku = sku.toUpperCase();
    let thisItem = this.itemManager.selectItem(sku);
    return {
      itemInfo: function() {
        let properties = Object.keys(thisItem);
        properties.forEach((property) => {
          console.log(`${property}: ${thisItem[property]}`);
        });
      },
    };
  },
  reportInStock: function() {
    let inStock = this.itemManager.inStock();
    let inStockNames = inStock.map((item) => item.itemName);
    console.log(inStockNames.join(', '));
  },
};

// Here is a sample run that you can use a reference: 
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// console.log(ItemManager.items());
// returns list with the 4 valid items

ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
// console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
// console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// console.log(ItemManager.items());
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10