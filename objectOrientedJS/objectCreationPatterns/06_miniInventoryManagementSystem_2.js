function itemCreator(name, category, quantity) {
  function validName(name) {
    let nameNoSpace = name.replace(' ', '');
    return nameNoSpace.length >= 5;
  }

  function validCategory(category) {
    return category.length >= 5 && !(/[ ]/.test(category)); 
  }

  function validQuantity(quantity) {
    return quantity !== undefined;
  }

  function createSKU(name, category) {
    let nameUpper = name.replace(' ', '').toUpperCase();
    return nameUpper.slice(0, 3) + category.toUpperCase().slice(0, 2);
  }

  if (validName(name) && validCategory(category) && validQuantity(quantity)) {
    return {
      skuCode: createSKU(name, category),
      itemName: name,
      category: category,
      quantity: quantity,
    };   
  } else {
    return {
      notValid: true,
    };
  }
}

let ItemManager = {
  items: [],
  create: function(name, category, quantity) {
    let newItem = itemCreator(name, category, quantity);
    if (newItem.notValid) {
      return false;
    } else {
      this.items.push(newItem);
    }
  },
  update: function(sku, obj) {
    let updatingObj = this.locateObj(sku);
    for (prop in obj) {
      updatingObj[prop] = obj[prop];
    }
  },
  delete: function(sku) {
    let idx = this.items.indexOf(this.locateObj(sku));
    this.items.splice(idx, 1);
  },
  inStock: function() {
    return this.items.filter((item) => item.quantity > 0);
  },
  itemsInCategory: function(category) {
    return this.items.filter((item) => item.category === category);
  },
  locateObj: function(sku) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].skuCode === sku) return this.items[i];
    }
  }
};

let ReportManager = {
  init: function(itemManagerObject) {
    this.items = itemManagerObject;
  },
  createReporter: function(sku) {
    let item = this.items.locateObj(sku);
    return {
      itemInfo: function() {
        for (name in item) {
          console.log(`${name}: ${item[name]}`);
        }
      },
    };
  },
  reportInStock: function() {
    let inStock = this.items.inStock();
    let names = [];
    for (let i = 0; i < inStock.length; i += 1) {
      names.push(inStock[i].itemName);
    }
    console.log(names.join(', '));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot

ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

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


ItemManager.update('KITCO', { quantity: 0 });
ReportManager.reportInStock();
// list of items with kitchen pot no longer in list
// "football"