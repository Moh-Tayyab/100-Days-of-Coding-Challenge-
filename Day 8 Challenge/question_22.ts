// Program written by [Muhammad Tayyab]
// Date:09-03-2024

/*
Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before 
finishing.

Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. 
Experimenting with this helps you understand array boundaries.

*/

let friends: string[] = ["Zain", "Alyan", "Umair"]

console.log(friends[3]) // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.

// Correction: Accessing a valid index
friends[2] = "Umair" // Correcting the error by accessing a valid index.

console.log(friends[2]) // Umair


