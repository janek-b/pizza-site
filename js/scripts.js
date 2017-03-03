// Back-End
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.getPrice = function() {
  // size small(10" $6) medium(12" $8) large(14" $10)
  return ((this.size - 4) + (this.toppings.length * 0.5)).toFixed(2);
}

Pizza.prototype.getDescription = function() {
  var sizeDesc = "";
  if (this.size === 10) {
    sizeDesc = "Small"
  } else if (this.size === 12) {
    sizeDesc = "Medium"
  } else if (this.size === 14) {
    sizeDesc = "Large"
  };
  return sizeDesc + " Pizza with " + this.toppings.length + " toppings";
}


// Front-End
$(function() {
  $("#build").click(function() {
    $("#build").slideUp();
    $("#pizzaForm").slideDown();
  });


  $("#pizzaForm").submit(function() {
    event.preventDefault();
    var inputSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var userPizza = new Pizza(inputSize);

    $("input:checkbox[name=topping]:checked").each(function() {
      userPizza.toppings.push($(this).val());
    });

    $("ul#pizzas").append("<li><span class'pizza'>" + userPizza.getDescription() + "</span></li>");

    console.log(userPizza);
    console.log(userPizza.getPrice());
    console.log(userPizza.getDescription());
    $("#orderPrice").text(userPizza.getPrice());
  })
})
