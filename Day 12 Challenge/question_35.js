// Program written by [Muhammad Tayyab]
// Date:13-03-2024
/*
Question 35: Animals: Highlight animals with a common trait.

Explain & TIP: Looping through an array of animals allows you to comment on each one individually.
This teaches you how to personalize messages within a loop based on array items.
*/
var animals = ["Cat", "Dog", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would like a great pet."));
});
console.log("Any of these animals would make a great pet.");
/*
Output:
A Cat would like a great pet.
A Dog would like a great pet.
*/ 
