# _Pizza Website_

#### _Pizza Website, 3-03-2017_

#### By _**Janek Brandt**_

## Description
_This project is a website that allows a user to place an order for a pizza. The user can choose the size and toppings of the pizza and the website will show them the price for the pizza options they selected._


## Specifications

| Behavior                   | Input Example     | Output Example    |
| -------------------------- | -----------------:| -----------------:|
| Create a pizza object that has a size property and a property for the toppings | var pizza = new Pizza(size, toppings) | Pizza {size: "size", toppings: [topping1, topping2, topping3]} |
| Pizza object has a method to calculate the price of the pizza | pizza.getPrice(); | "$12" |
| getPrice method calculates a base price based on the size property and adds a topping price for each topping. | pizza.getPrice(); | "$13.50" , "$12" base "$.50" each topping |


## Setup/Installation Requirements

* _Clone the repository_
* _Open index.html file in web browser to view the project locally_
* _Use web server of your choice to host the website_

_The project can also be viewed [here](http://janek-b.github.io/pizza-site)_

### License

Copyright (c) 2017 **_Janek Brandt_**

This software is licensed under the MIT license.
