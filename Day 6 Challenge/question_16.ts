// Program written by [Muhammad Tayyab]
// Date: 07-03-2024

import { log } from "console";

/*
Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
*/

/*
Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, 
middle, and end of an array.
*/
//For example, if you have an array of 10 guests, you can add a new guest at the beginning, middle, and end of the array.

let guests: string[] = ["Asad", "Usama", "Sulman"];

console.log("Great New! I found a bigger dinner.")

guests.unshift("Muhammad");

guests.splice(guests.length / 2,0, "Fahad");

guests.push("Zain"); 

guests.forEach(guests => {
    console.log(`Dear ${guests}, I would like to invite you to a bigger dinner.`);
});
