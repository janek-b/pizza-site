// Back-End
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings.slice();
};

Pizza.prototype.getPrice = function() {
  // size small(10" $6) medium(12" $8) large(14" $10)
  return (this.size - 4) + (this.toppings.length * 0.5);
}


// Front-End
$(function() {
  $("#pizzaForm").submit(function() {
    event.preventDefault();
    var inputSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var inputToppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      inputToppings.push($(this).val());
    });
    var userPizza = new Pizza(inputSize, inputToppings);
    console.log(userPizza);
    console.log(userPizza.getPrice());
  })
})
