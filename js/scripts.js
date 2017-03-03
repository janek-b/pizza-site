// Back-End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings.slice();
};

Pizza.prototype.getPrice = function() {
  // size small(10" $6) medium(12" $8) large(14" $10)
  return (this.size - 4) + (this.toppings.length * 0.5);
}

var pizza = new Pizza(10, ["onion", "ham", "bacon", "cheese"]);
console.log(pizza.getPrice());

// Front-End
