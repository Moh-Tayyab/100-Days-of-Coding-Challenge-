// Program written by [Muhammad Tayyab]
// Date:16-03-2024
/*
Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for
handling lists of data like sandwich ingredients.
*/
function sandwiches() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Make a sandwich with: ".concat(ingredients, "."));
    //console.log(`Make a sandwich with: ${ingredients.join(' , ')}.`)
}
sandwiches('ham', 'cheese');
sandwiches('tomato', 'onion', 'cucumber');
sandwiches('mushrooms', 'onions', 'spinach', 'tomatoes');
