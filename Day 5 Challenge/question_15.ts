// Program written by [Muhammad Tayyab]

//  Date: 06-03-2024

/*
Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set 
of invitations with a replacement guest.
*/

/*
Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again
for new invitations.
*/


let guestList1: string[] = ["Ahsan", "Rehan", "Zain"]

guestList1.forEach(guestList1 => {
    console.log(`${guestList1}, would you like to join me dinner?`);
})


let unableToAttend: string = "Danish";

console.log(`${unableToAttend}, can't make it to dinner.`);

let newGuest: string = "Babar";

guestList1[guestList1.indexOf(unableToAttend)] = newGuest;

guestList1.forEach(guestList1 => {
    console.log(`${guestList1}, would you like to join me dinner?`);
})



