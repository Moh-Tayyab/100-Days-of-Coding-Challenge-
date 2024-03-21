// Program written by [Muhammmad Tayyab]
// Date:17-03-2024

/*
Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate 
arrays efficiently.
*/

const laptop1 = [1000, 2000, 3000, 4000];
const laptop2 = [5000, 6000, 7000, 8000];

const combinedLaptops = [...laptop1,...laptop2].sort((a, b) => a - b);

console.log(combinedLaptops);

