"use strict";
// Program written by [Muhammad Tayyab]
// Date:06-03-2024
/*
Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/
/*
Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list,
useful for planning and organizing information.
*/
let frvtPlace = ["Madina", "Dubai", "New York", "Canada", "Singapore"];
console.log("Original Order:", frvtPlace.slice());
console.log("Alphabetical Order:", [...frvtPlace].sort());
console.log("Original Order:", frvtPlace.slice());
console.log("Reverse Alphabetical Order:", [...frvtPlace].sort().reverse());
console.log("Random Order:", frvtPlace.sort(() => Math.random() - 0.5));
console.log("Original Order:", frvtPlace.slice());
frvtPlace.reverse();
console.log("Reversed Order:", frvtPlace.slice());
frvtPlace.reverse();
console.log("Original Order:", frvtPlace.slice());
frvtPlace.sort();
console.log("Alphabetical Order:", frvtPlace.slice());
frvtPlace.reverse();
console.log("Reversed Alphabetical Order:", frvtPlace.slice());
