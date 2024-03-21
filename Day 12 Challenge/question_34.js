// Program written by [Muhammad Tayyab]
// Date:13-03-2024
/*
Question 34: Pizzas: Share your favorite pizzas and express your love for them.

Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type.
This demonstrates looping through an array and appending custom messages to each item.
*/
var pizzaList = [
    "Pepperoni Pizza",
    "Hawaiian Pizza",
    "Margherita Pizza",
    "Chicken Pizza",
    "Veggie Pizza",
    "Cheese Pizza",
];
pizzaList.forEach(function (pizzas) {
    console.log("I like ".concat(pizzas));
});
console.log("I already Love Pizza");
