// Program written by [Muhammad Tayyab]
// Date:17-03-2024
/*
Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with
properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then,
log these variables.

Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access
to complex data structures.
*/
var laptops = [
    {
        make: 'Apple',
        model: 'Mac Book Pro',
        year: 2020
    },
    {
        make: 'Dell',
        model: 'XPS 15',
        year: 2021
    },
    {
        make: 'HP',
        model: 'Spectre x360',
        year: 2019
    }
];
var firstLaptop = laptops[0], secondLaptop = laptops[1], thirdLaptop = laptops[2];
console.log(firstLaptop);
console.log(secondLaptop);
console.log(thirdLaptop);
