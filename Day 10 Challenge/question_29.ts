// Program written by [Muhammad Tayyab]
// Date:11-03-2024

/*
Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are 
included.

Explain & TIP: Arrays can store multiple items like fruit names. Use if statements to check for specific
fruits.
*/

let favoriteFruits: string[] = ["Apples", "Bananas", "Oranges", "Mangoes"];

if (favoriteFruits.includes("Apples")) {
    console.log("Apple is a favorite fruit.");
}

if (favoriteFruits.includes("Mangoes")) {
    console.log("Mango is a favorite fruit.");
}

if (favoriteFruits.includes("Oranges")) {
    console.log("Orange is a favorite fruit.");
}

if (favoriteFruits.includes("Bananas")) {
    console.log("Banana is a favorite fruit.");
}

if (favoriteFruits.includes("Grapes")) {
    console.log("Grapes is not a favorite fruit.");
}
