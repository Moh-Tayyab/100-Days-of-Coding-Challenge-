// Program written by [Muhammad Tayyab]
// Date:15-03-2024

/*
Question 42: Great Magicians: Add "the Great" to magician names.

Explain & TIP: Modifying array contents within a function demonstrates how functions can change data.
This shows the impact of passing arrays by reference.
*/

function make_greet(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' ' +"the Great Magician."
}
    return magicians;

}

let magician1 = make_greet(["Ali", "Fahad", "Sameer"]);

console.log(magician1);


