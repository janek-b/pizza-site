// Back-End
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.getPrice = function() {
  // size small(10" $6) medium(12" $8) large(14" $10)
  return ((this.size - 4) + (this.toppings.length * 0.5)).toFixed(2);
};

Pizza.prototype.getSizeDesc = function() {
  if (this.size === 10) {
    return "Small";
  } else if (this.size === 12) {
    return "Medium";
  } else if (this.size === 14) {
    return "Large";
  };
};

Pizza.prototype.getDescription = function() {
  return this.getSizeDesc() + " Pizza with " + this.toppings.length + " toppings";
};

Pizza.prototype.getToppingList = function() {
  return this.toppings.reduce(function(string, topping) {
    return string + "<li>" + topping + "</li>";
  }, "<ul>") + "</ul>";
};

function Order() {
  this.items = [];
};

Order.prototype.getOrderTotal = function() {
  return this.items.reduce(function(total, item) {
    return total + parseFloat(item.getPrice());
  }, 0).toFixed(2);
};


// Front-End
$(function() {
  var order = new Order();
  $("#build").click(function() {
    $("#build").slideUp();
    $("#orderPizza").slideDown();
  });

  $("#anotherPizza").click(function() {
    $("#pizzaForm").slideDown();
  });

  $("#pizzaForm").submit(function() {
    event.preventDefault();
    var inputSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var userPizza = new Pizza(inputSize);
    $("input:checkbox[name=topping]:checked").each(function() {
      userPizza.toppings.push($(this).val());
    });
    order.items.push(userPizza);

    $("ul#pizzas").append("<li><span class='pizza'>" + userPizza.getDescription() + "</span><span class='pull-right'>$" + userPizza.getPrice() + "</span></li>");
    $("ul#pizzas > li").last().after(userPizza.getToppingList());
    $("ul#pizzas > li").last().next().hide();
    $("ul#pizzas > li").last().click(function() {
      $(this).next().slideToggle();
    });
    $("#orderPrice").text("$" + order.getOrderTotal());

    $("input:checkbox[name=topping]").each(function() {
      this.checked = false;
    });
    $("#orderDetails").slideDown();
    $("#pizzaForm").slideUp();
  });

  $("input:radio[name=delivery]").change(function() {
    if ($(this).val() === "delivery") {
      $("#address").slideDown();
    } else if ($(this).val() === "pickup") {
      $("#address").slideUp();
    };
  });

  $("#placeOrder").click(function() {
    $("#pizzaForm").slideUp();
    $("#anotherPizza").slideUp();
    $("#placeOrder").slideUp();
    $("#deliveryOptions").slideDown();
  });

  $("#checkoutForm").submit(function() {
    event.preventDefault();
    var deliveryFields = ["first-name", "last-name", "phone", "street", "city"];
    var pickupFields = ["first-name", "last-name", "phone"];
    deliveryFields.forEach(function(field) {
      $("#"+field).removeClass("missingInput");
    });

    if ($("input:radio[name=delivery]:checked").val() === "pickup") {
      var inputFields = pickupFields.slice();
      $("#output-pickup").show();
      $("#output-delivery").hide();
    } else if ($("input:radio[name=delivery]:checked").val() === "delivery") {
      var inputFields = deliveryFields.slice();
      $("#output-delivery").show();
      $("#output-pickup").hide();
    };
    var formCompleted = true;
    inputFields.forEach(function(field) {
      if ($("#"+field).val() === "") {
        $("#"+field).addClass("missingInput");
        formCompleted = false;
      };
    });
    if (formCompleted) {
      inputFields.forEach(function(field) {
        var inputfield = $("#"+field).val();
        $("#output-"+field).text(inputfield);
      });
      $("ul#orderSummary").empty();
      order.items.forEach(function(item) {
        $("ul#orderSummary").append("<li>"+item.getDescription()+"<span class='pull-right'>$"+item.getPrice()+"</span></li>")
      });
      $(".output-orderTotal").text("$"+order.getOrderTotal());
      $("#orderCompleteModal").modal();
    };

  });
});
