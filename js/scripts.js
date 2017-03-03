// Back-End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings.slice();
};


var pizza = new Pizza(10, ["onion", "ham", "bacon"]);
console.log(pizza);

// Front-End
