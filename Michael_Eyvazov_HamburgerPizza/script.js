function orderHamburger() {
  let vegetables = prompt("Do you want vegetables in your hamburger?Yes/No?");
  // if (vegetables == "Yes") {
  //     let tomatoes = prompt("Do you want a tomato?");
  //     let pickles = prompt('Do you want a pickles?');
  //     let lettuce = prompt('Do you want a lettuce?');
  //   }
  let drink = prompt("Do you want a drink?Yes/No?");
  //   if (drink == 'Yes') {
  //       let typeOfDrink = prompt('What kind of drink do you want? Coca-Cola, Pepsi or Fanta');
  //     }
  let chips = prompt("Do you want a chips?Yes/No?");

  let extraPatty = prompt('You want extra patty?Yes/No?')
  
  alert('Your order is inclusive:\n'+ 'Vegetables: '+vegetables +'\n'+'Chips: ' + chips + '\n' + 'Drink: ' + drink + '\n' + 'Extra patty: ' + extraPatty);
}

function orderPizza() {
    let topping = prompt('Do you want any toppings for the pizza?')
    let drink = prompt('Do you want a drink?Yes/No?');
    alert('Your order is inclusive:\n'+ 'Topping: '+topping +'\n' + 'Drink: ' + drink );
}
